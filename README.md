# Humanique

**The Human Half of Your Great Website.**

AI can code a website — but it can't make it stand out. Humanique gives your
vibe-coded site a unique, human-crafted design that's still editable with
prompts, locally hosted, and entirely yours to control.

This repo is the Humanique landing page: a fast, responsive, dependency-free
static site.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content |
| `styles.css` | Styling, palette, and responsive layout |
| `script.js` | Plan selection, email sign-up, scroll reveals |

## Run locally

It's a static site — open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- No build step and no runtime dependencies. Fonts load from Google Fonts.
- The sign-up form is front-end only; wire the submit handler in `script.js`
  to your backend/CRM when ready.
