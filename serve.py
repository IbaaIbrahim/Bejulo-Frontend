#!/usr/bin/env python3
"""Development server for the bejulo front end.

Identical to `python3 -m http.server` except that it sends `Cache-Control:
no-store`, so edits to CSS/JS are picked up on a plain reload instead of the
browser serving a heuristically cached copy.

Development only. In production, serve these files with real caching headers
(and ideally hashed filenames) rather than no-store.

Port resolution, in order:
  1. $PORT            — what the Claude Code preview runner assigns
  2. first CLI arg    — e.g. `python3 serve.py 4173`
  3. 4173             — default

The site is static, so it does not need any particular port; keep .claude/
launch.json on "autoPort": true and let the runner choose a free one.
"""
import os
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("  %s\n" % (fmt % args))


def resolve_port():
    for candidate in (os.environ.get("PORT"), sys.argv[1] if len(sys.argv) > 1 else None):
        if not candidate:
            continue
        try:
            port = int(candidate)
        except ValueError:
            continue
        if 0 < port < 65536:
            return port
    return 4173


def main():
    port = resolve_port()
    handler = partial(NoCacheHandler, directory=os.path.dirname(os.path.abspath(__file__)))
    with ThreadingHTTPServer(("127.0.0.1", port), handler) as httpd:
        print(f"bejulo dev server -> http://localhost:{port}  (Ctrl+C to stop)", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nstopped")


if __name__ == "__main__":
    main()
