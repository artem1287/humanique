# Humanique

Pixel-exact landing page built from the supplied design (1920×4278 canvas,
scaled to fit the viewport).

## Interactive pieces

- **Hero before/after slider** — drag to compare the Humanique-crafted site
  (`assets/hero-a.png`) against the generic AI build (`assets/hero-b.png`).
- **Look-alike marquee** — an auto-scrolling strip of template tiles. Replace
  each `.tile` placeholder (currently inline SVG data-URIs generated in the
  page) with real 589×340 screenshots when ready.
- Serif headings use Young Serif at `-2px` letter-spacing.

## Swapping images

- Hero slider: drop new 1381×695 images into `assets/` and keep the names, or
  edit the two `<img>` `src`s in the `.compare` block.
- Marquee: replace the `src` of each `.tile` `<img>` with your uploads
  (589×340). Keep an even count and the loop stays seamless.

## Run

```bash
python3 -m http.server 8000   # open http://localhost:8000
```
