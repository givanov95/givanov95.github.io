#!/usr/bin/env bash
# Regenerates cv/cv-{en,bg}.pdf (2 pages each) from src/cv/{en,bg}.html
# with headless Chromium. Needs: chromium or google-chrome, poppler-utils (pdfinfo) and the Noto Sans font (Cyrillic).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

CHROME=""
for c in chromium chromium-browser google-chrome google-chrome-stable; do
	if command -v "$c" >/dev/null 2>&1; then CHROME="$c"; break; fi
done
[ -n "$CHROME" ] || { echo "build-cv: no chromium / google-chrome found" >&2; exit 1; }
command -v pdfinfo >/dev/null 2>&1 || { echo "build-cv: pdfinfo not found (install poppler-utils)" >&2; exit 1; }
[[ "$(fc-list 2>/dev/null)" == *'Noto Sans'* ]] || echo "build-cv: warning - Noto Sans is not installed, text will fall back to another font" >&2

# Snap Chromium can only read/write under ~/snap/chromium/common, so build there.
if [ -d "$HOME/snap/chromium/common" ]; then
	WORK="$HOME/snap/chromium/common/cv-build"
	rm -rf "$WORK" && mkdir -p "$WORK"
else
	WORK="$(mktemp -d)"
fi
trap 'rm -rf "$WORK"' EXIT
cp "$ROOT"/src/cv/*.html "$ROOT"/src/cv/cv.css "$WORK"/

render() { # <lang> <output name> <expected pages>
	local lang="$1" out="$2" pages="$3"
	"$CHROME" --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
		--print-to-pdf="$WORK/$out.pdf" "file://$WORK/$lang.html" >/dev/null 2>&1
	local info; info="$(pdfinfo "$WORK/$out.pdf")"
	if grep -q 'OVERFLOW' <<<"$info"; then echo "build-cv: $out overflows its page" >&2; exit 1; fi
	local got; got="$(awk '/^Pages:/ {print $2}' <<<"$info")"
	if [ "$got" != "$pages" ]; then echo "build-cv: $out has $got pages, expected $pages" >&2; exit 1; fi
	cp "$WORK/$out.pdf" "$ROOT/cv/$out.pdf"
	echo "cv/$out.pdf ($got pages)"
}

render en cv-en 2
render bg cv-bg 2
