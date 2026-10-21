# Lulamile Mkhungela — portfolio

A desktop-style portfolio for Lulamile Mkhungela, a Devsigner working across
UX/UI/CX, product design and UI development.

Case studies open as windows on the desktop and in the mobile shell. The
Vision Bin holds the full archive, press, pictures and toolkit, and the AI
Prompts window carries the design library.

## Run it locally

The site is static. Serve the repository root so the relative paths resolve:

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Structure

- `index.html` — the desktop shell.
- `portfolio/` — case studies and the design library.
- `css/`, `js/` — styles and scripts.
- `images/`, `public/`, `assets/`, `vision/`, `fonts/` — media and type.
- `evidence.html` — the evidence page behind every case study.
- `portfolio/postman-preview.html`, `portfolio/storybook-preview.html`,
  `portfolio/hotjar-preview.html`, `portfolio/vscode-preview.html` and
  `portfolio/azuredevops-preview.html` — the previews behind the Postman,
  Storybook, Hotjar, VS Code and Azure DevOps items in the Dock. Each is a
  standalone page with its own styles and scripts, and loads in the dock popup
  through `embed` in `js/desktop.js`.

## Editing notes

- Case studies share the layout in `css/portfolio-case-shared.css` and the
  page shell in each file under `portfolio/`.
- The design library lives in `portfolio/lula-design-library.html`. Free cards
  may carry their prompt in `data-prompt`; paid cards never do.
- Locked studies are decrypted in the browser by `js/case-lock.js`.
- The tool previews are self-contained: the Postman responses, Hotjar metrics,
  VS Code workspace files and Azure DevOps work items are authored inside each
  page, so they work offline and never call a live API. Opening one directly
  shows the same thing, full-page. Their content uses the fictional **Lulas**
  brand rather than a real client.
- Site copy is written in the first person singular — “I”, “me”, “my”. Avoid
  “we”, “our” and “us” outside direct quotations and demo brand copy.
