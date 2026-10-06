# givanov95.github.io

My personal portfolio site — [givanov95.github.io](https://givanov95.github.io)

A single-page portfolio for Georgi Ivanov, full-stack web developer. A static
site: plain HTML, Tailwind CSS compiled to a committed stylesheet, and a small
vanilla-JS file for interactions.

## Tech

- **HTML** — single `index.html`, semantic sections
- **Tailwind CSS v4** — theme in `src/styles.css`, compiled with the Tailwind CLI to `assets/css/styles.css` (committed)
- **Vanilla JS** — no framework, no dependencies (`assets/js/main.js`)
- **GitHub Pages** — static hosting straight from the repo (no CI)

## Features

- "Profile Sidebar" layout — sticky profile card on desktop, stacked on mobile
- Colourful rounded section panels (Work, Skills, Experience, Contact)
- Active-section nav highlighting (IntersectionObserver)
- CV modal with EN / BG resume and CV downloads, and a copy-email button
- Inline SVG favicon, canonical URL and Open Graph tags for social sharing
- `robots.txt` and `sitemap.xml` for crawlers

## Structure

```
.
├── index.html          # The whole page (profile sidebar, intro, work, skills, experience, contact)
├── src/styles.css      # Stylesheet source: Tailwind import, theme (colours, fonts), custom styles
├── assets/
│   ├── css/styles.css   # Compiled + minified CSS (generated — do not edit by hand)
│   └── js/main.js       # Scroll-spy, CV modal, copy email
├── cv/                 # Resume / CV PDFs (EN + BG)
├── images/             # Photos and assets
├── robots.txt
├── sitemap.xml
├── _config.yml         # Keeps repo-only files out of the published site (GitHub Pages / Jekyll)
├── package.json        # Tailwind CLI + build scripts
└── LICENSE
```

## Running locally

Serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

The CSS is compiled, so after changing Tailwind classes in `index.html` /
`assets/js/main.js` or the theme in `src/styles.css`, rebuild it and **commit
the result** (GitHub Pages serves the repo as is):

```bash
npm install        # once
npm run build      # compile + minify -> assets/css/styles.css
npm run dev        # or: watch mode while editing (unminified output)
```

## License

Licensed under the [Apache License 2.0](LICENSE).
