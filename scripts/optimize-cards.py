#!/usr/bin/env python3
"""Optimize service cards to match container 2x retina dimensions with Lanczos resampling."""
import os
from PIL import Image, ImageOps

CARDS = [
    ('card-development.jpg', 802, 820),
    ('card-construction.jpg', 802, 702),
    ('card-operations.jpg', 802, 702),
    ('card-ipp.jpg', 802, 702),
]

def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src_dir = os.path.join(root, 'docs/source-assets/cards-master')
    dst_dir = os.path.join(root, 'assets/img')
    for name, w, h in CARDS:
        src = os.path.join(src_dir, name)
        dst = os.path.join(dst_dir, name)
        if not os.path.exists(src):
            print(f"Skipping {name}: source not found")
            continue
        with Image.open(src) as im:
            fitted = ImageOps.fit(im, (w, h), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
            fitted.save(dst, 'JPEG', quality=90, optimize=True, progressive=True)
            print(f"Optimized {name} -> {dst} ({w}x{h})")

if __name__ == '__main__':
    main()
