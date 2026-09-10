#!/usr/bin/env python3
"""Stamp a cache-busting ?v= on every CSS/JS reference in the HTML pages.

WHY
---
nginx serves .css and .js with `expires 1y` + `Cache-Control: immutable`
(see nginx.conf). `immutable` means the browser will not even revalidate, so a
returning visitor keeps running the JS it downloaded last time — a copy edit in
assets/js/content.js does not reach them until they hard-reload. That is the
right header, but only for URLs that change when the bytes change, and this
site has no build step to hash filenames.

So the version goes in the query string instead:

    <script src="assets/js/content.js?v=8f3a1c02"></script>

`?v=` is part of the cache key but not of the filename, so nginx and serve.py
both still resolve it to the file on disk — nothing else has to change.

The value is a short hash of that file's own contents, not a global number, so:
  · it is impossible to forget to bump it,
  · and only the files that actually changed get re-downloaded.

HTML itself must stay revalidated for any of this to work — it carries the new
?v= values. nginx.conf sends `Cache-Control: no-cache` for HTML for that reason.

USE
---
    python3 stamp-assets.py            # rewrite the stamps, report what moved
    python3 stamp-assets.py --check    # exit 1 if anything is stale (for CI)

Run it before deploying: `make up` does, and so does `make stamp`.
"""
import hashlib
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent

# Only first-party and vendored code is stamped. Fonts, images, video and the
# certificate PDFs are left alone: they are replaced far less often, and when
# one does change it is usually under a new name anyway. If that stops being
# true, widen this pattern rather than reaching for a global version number.
REF = re.compile(
    r'(?P<attr>\b(?:src|href)=")'
    r'(?P<path>assets/(?:css|js|vendor)/[^"?#]+\.(?:css|js))'
    r'(?:\?v=[0-9a-f]+)?'
    r'(?P<tail>")'
)


def stamp(path: str) -> str:
    """Short content hash of the asset at `path`, relative to the repo root."""
    data = (ROOT / path).read_bytes()
    return hashlib.sha256(data).hexdigest()[:8]


def main(check_only: bool) -> int:
    stale, missing = [], []

    for page in sorted(ROOT.glob('*.html')):
        original = page.read_text(encoding='utf-8')

        def replace(m: 're.Match') -> str:
            asset = m.group('path')
            if not (ROOT / asset).is_file():
                missing.append(f'{page.name} -> {asset}')
                return m.group(0)
            return f"{m.group('attr')}{asset}?v={stamp(asset)}{m.group('tail')}"

        updated = REF.sub(replace, original)
        if updated == original:
            continue
        stale.append(page.name)
        if not check_only:
            page.write_text(updated, encoding='utf-8')

    for ref in missing:
        print(f'missing asset: {ref}', file=sys.stderr)

    if check_only:
        if stale:
            print('stale asset stamps in: ' + ', '.join(stale), file=sys.stderr)
            print('run `make stamp` and commit the result', file=sys.stderr)
        else:
            print('asset stamps are up to date')
    else:
        print(f'stamped {len(stale)} page(s)' + (': ' + ', '.join(stale) if stale else ''))

    return 1 if (missing or (check_only and stale)) else 0


if __name__ == '__main__':
    sys.exit(main('--check' in sys.argv[1:]))
