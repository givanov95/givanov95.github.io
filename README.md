# givanov95.github.io

My personal portfolio site — [givanov95.github.io](https://givanov95.github.io)

A single-page portfolio for Georgi Ivanov, full-stack web developer. Built as a
static site with no build step: plain HTML, Tailwind via the Play CDN, and a
small vanilla-JS file for interactions.

## Tech

- **HTML** — single `index.html`, semantic sections
- **Tailwind CSS** — [Play CDN](https://tailwindcss.com/docs/installation/play-cdn), configured inline in `index.html`
- **Vanilla JS** — no framework, no dependencies (`assets/js/main.js`)
- **GitHub Pages** — static hosting straight from the repo

## Features

- "Profile Sidebar" layout — sticky profile card on desktop, stacked on mobile
- Colourful rounded section panels (Work, Skills, Experience, Contact)
- Active-section nav highlighting (IntersectionObserver)
- CV modal with EN / BG resume and CV downloads, and a copy-email button
- Inline SVG favicon and Open Graph tags for social sharing

## Structure

```
.
├── index.html          # The whole page (profile sidebar, intro, work, skills, experience, contact)
├── assets/
│   ├── css/styles.css   # Custom styles on top of Tailwind
│   └── js/main.js       # Scroll-spy, CV modal, copy email
├── cv/                 # Resume / CV PDFs (EN + BG)
├── images/             # Photos and assets
└── LICENSE
```

## Running locally

No build needed — just serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` in a browser.

## License

Licensed under the [Apache License 2.0](LICENSE).
