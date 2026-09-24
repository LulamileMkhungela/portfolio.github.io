import http.server, socketserver, os, posixpath

os.chdir(os.path.dirname(os.path.abspath(__file__)))


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    """LulaMile-HalfMachine — local preview server.

Static files with an SPA route fallback (folder/index.html or route.html).
Not needed for hosting: the site is plain static files.

Also mirrors GitHub Pages project-site hosting: the live site lives under
/portfolio.github.io/, so requests with that prefix are served too. This lets
you verify both mounts locally:
  http://localhost:8000/                      (user-site / custom-domain shape)
  http://localhost:8000/portfolio.github.io/  (project-site shape, like Pages)
"""

    # Repo name doubles as the Pages project-site subpath. Handles the
    # `/portfolio.github.io/...` mount the same way GitHub Pages does.
    REPO_BASE = '/portfolio.github.io'

    def end_headers(self):
        # always serve fresh during review
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()

    def do_GET(self):
        # Mirror Pages project-site hosting: strip the /<repo> prefix if present.
        raw = self.path.split('?')[0].split('#')[0]
        if raw == self.REPO_BASE or raw == self.REPO_BASE + '/' or raw.startswith(self.REPO_BASE + '/'):
            stripped = raw[len(self.REPO_BASE):] or '/'
            self.path = stripped + self.path[len(raw):]
        path = self.path.split('?')[0].split('#')[0]
        fs_path = self.translate_path(path)
        if not os.path.exists(fs_path):
            stripped = fs_path.rstrip('/')
            # /about  ->  /about/index.html
            if os.path.isdir(stripped) and os.path.exists(os.path.join(stripped, 'index.html')):
                self.path = path.rstrip('/') + '/index.html'
            # /about  ->  /about.html
            elif os.path.exists(stripped + '.html'):
                self.path = path.rstrip('/') + '.html'
            # unknown SPA route -> root index.html (but never for asset paths)
            elif not any(path.startswith(p) for p in ('/assets/', '/projects/', '/lulamile/', '/favicon')):
                self.path = '/index.html'
        return super().do_GET()

    do_HEAD = do_GET
    def log_message(self, fmt, *args):
        pass  # quiet


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


PORT = int(os.environ.get('PORT', 8000))
with Server(("0.0.0.0", PORT), SPAHandler) as httpd:
    print(f"Serving the LulaMile-HalfMachine portfolio at http://0.0.0.0:{PORT}")
    httpd.serve_forever()
