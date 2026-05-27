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

- Responsive layout with mobile nav menu
- Scroll-reveal animations and active-section nav highlighting (IntersectionObserver)
- CV modal with EN / BG resume and CV downloads
- Progressive enhancement — content stays visible if JS fails to load
- Inline SVG favicon and Open Graph tags for social sharing

## Structure

```
.
├── index.html          # The whole page (nav, hero, about, skills, work, experience, contact)
├── assets/
│   ├── css/styles.css   # Custom styles on top of Tailwind
│   └── js/main.js       # Nav, scroll-reveal, scroll-spy, CV modal
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
