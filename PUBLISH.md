# Publish checklist (GitHub)

## Logo
- Brand mark is a clear **L** in `assets/logo-ls.svg` (used in nav/footer on every page).
- PNG icons: `assets/icon-192.png`, `assets/icon-512.png`, `assets/apple-touch-icon.png`.
- Favicons linked on all HTML pages.

## Before you push
1. Open `index.html` locally and click through:
   - Home → Showcase (Business / Portfolio / Figma tabs)
   - A case study (scroll process rail highlights)
   - About (personal page + `mkhungela.l@gmail.com`)
   - Contact (WhatsApp only here)
   - Theme toggle light/dark
2. Confirm logo reads as **L**, not P.
3. Confirm floating control is the **assistant bot** icon (not WhatsApp), except Contact WhatsApp buttons.

## GitHub Pages (static site)
From the project root (folder that contains `index.html`):

```bash
git init
git add .
git commit -m "Publish LulaSync site with L logo and case studies"
# create empty repo on GitHub, then:
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

GitHub → **Settings → Pages → Deploy from branch `main` / root** (or `/docs` if you use that).

Site URL will be:
`https://YOUR_USER.github.io/YOUR_REPO/`

## Optional: custom domain
Add a `CNAME` file with your domain and point DNS as GitHub instructs.

## Do not commit secrets
- Never commit WhatsApp Cloud API tokens.
- `whatsapp-bot/` is optional; deploy separately with Wrangler secrets if needed.
