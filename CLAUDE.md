# givanov95.github.io — лично портфолио на Georgi Ivanov

Статичен сайт: single-page `index.html`, Tailwind v4 (компилиран локално до commit-нат CSS), vanilla JS (`assets/js/main.js`), хостван на GitHub Pages. Комуникация с потребителя: български. Код, commit-и и PR-и: английски.

Работният флоу (issue-та, PR-и) идва от плъгина `gws@claude-flow` — `/gws:issue <N>`. Този файл носи само спецификите на проекта.

## Branch-ове
- Базов branch: `master`. Issue branch-ове: `fix|feat|chore/N-kratko-ime` от него, PR към него, squash merge.
- Issue-то се затваря с `Fixes #N` в тялото на commit-а (базовият branch е default — затваря се при merge на PR-а).

## Deploy
- Няма — проектът не се качва на сървър. `/gws:ship` не е приложим тук; доставката е merge в базовия branch.

## Build и commit-и
- **CSS build:** `npm install` (веднъж), после `npm run build` след всяка промяна на Tailwind класове в `index.html`/`assets/js/main.js` или на `src/styles.css`. Изходът `assets/css/styles.css` е **генериран и се commit-ва** — не се редактира на ръка; GitHub Pages го сервира както е (deploy from branch `master`, без CI). Забравен rebuild = сайтът в production няма новите класове. `npm run dev` е watch режим (изходът му не е минифициран — преди commit пусни `npm run build`).
- Темата (цветове, шрифтове) е в `@theme` на `src/styles.css`, не в `index.html`. Tailwind сканира само `index.html` и `main.js` (`@source`) — нов файл с класове трябва да се добави там.
- **Шрифтове:** самохоствани в `assets/fonts/` (`woff2` + `OFL-*.txt` лиценз), `@font-face` е в `src/styles.css`, а `index.html` прави `preload` само на `latin` файловете над сгъването. Нов шрифт = свали `woff2` + лиценза, добави `@font-face` (с `unicode-range` по subset-и), `npm run build`. Не се добавя `<link>` към Google Fonts — сайтът не бива да прави заявки към трети страни. Нито Figtree, нито Young Serif имат кирилица — българските етикети падат на системния шрифт.
- Няма тестове или pre-commit hook. Проверка на промяна: `python3 -m http.server 8000` и преглед в браузър на 1440 / 768 / 375 px.
- `_config.yml` изключва `CLAUDE.md`, `README.md` и tooling файловете от публикувания сайт (Pages пуска Jekyll) — нов вътрешен файл в корена, който не бива да е публичен, се добавя в `exclude`. `robots.txt` и `sitemap.xml` са в корена и са ръчно поддържани.
- Commit стил: Conventional Commits на английски (`fix(scope): ...`).

## GitHub
- Нови issue-та се добавят в project board „gws".
