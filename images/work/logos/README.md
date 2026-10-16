# Client logos for project covers

Drop official client logo files in this folder and they appear automatically on
the matching project cover in the Projects window and the mobile library. No
code change is needed.

## Expected filenames

| File             | Client                              | Used by                                             |
| ---------------- | ----------------------------------- | --------------------------------------------------- |
| `agsa.png`       | Auditor-General of South Africa     | Media scanning for audit planning                     |
| `sasol.png`      | Sasol                               | Safety statistics reference                           |
| `old-mutual.png` | Old Mutual                          | Compliance AI assistant                               |
| `eskom.png`      | Eskom                               | Coal stockpile forecasting                            |
| `takeda.png`     | Takeda Pharmaceuticals              | Configurable chart components, configurable timeline  |

`.svg` also works — change the `src` in the matching `projectLogo` entry in
`js/library-data.js` to the new extension.

## Current state

All five logos are present as trimmed PNGs, normalised to 80px tall on a white
ground. They were sourced from the open web, not drawn: the AGSA file came
from agsa.co.za and had its "115 YEARS 1911-2026" commemorative badge cropped
off so only the standing mark remains.

Replace any of them with better artwork by overwriting the file with the same
name. Nothing else needs changing.

## What happens if a file is missing

Nothing is drawn. `libraryProjectLogo()` in `js/desktop.js` renders the lockup
only when `src` points at a file that loads; if the file is missing the
`onerror` handler removes the whole lockup, so the cover shows the artwork
alone.

There used to be a stand-in glyph (a magnifier, a shield, a bar chart) next to
the client name. That was invented artwork sitting where a real company's logo
belongs, so it was removed. A placeholder mark is worse than no mark.

No logo here is drawn, traced or AI-generated.

## Before you add them

Two things worth checking, because these six projects are the NDA ones:

1. **Trademark permission.** Using a client's logo to market your own services
   usually needs their sign-off, even when you can name them in a CV.
2. **The NDA itself.** The engagements are already named in text on this site.
   Adding the logo makes the association more prominent and more "endorsement
   shaped", which is the part clients tend to object to.

If either is a problem, delete the `src` key from that entry in
`js/library-data.js` and the cover reverts to the neutral glyph and wordmark.
