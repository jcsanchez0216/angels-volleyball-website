#!/usr/bin/env python3
"""Download and crop the two verified free-license stock photos into Home page assets.
Source photos confirmed under the Unsplash License (free for commercial/noncommercial
use, no attribution required) — verified visually during design, not just by caption."""
import subprocess
import os
from PIL import Image

WORKDIR = "/tmp/home-photos"
os.makedirs(WORKDIR, exist_ok=True)
os.makedirs("public/photos", exist_ok=True)

SOURCES = {
    "fleming": "https://images.unsplash.com/photo-1547347298-4074fc3086f0?fm=jpg&q=90&w=2400&auto=format&fit=crop",
    "tilkian": "https://images.unsplash.com/photo-1567781830902-685fb3401f1d?fm=jpg&q=90&w=1800&auto=format&fit=crop",
}

for name, url in SOURCES.items():
    dest = f"{WORKDIR}/{name}.jpg"
    subprocess.run(["curl", "-sL", url, "-o", dest], check=True)
    size = Image.open(dest).size
    print(f"downloaded {name}: {size}")

fleming = Image.open(f"{WORKDIR}/fleming.jpg")  # expected 2400x1600
tilkian = Image.open(f"{WORKDIR}/tilkian.jpg")   # expected 1800x1200

def crop_resize(img, box, size, out_name, quality=78):
    c = img.crop(box).resize(size, Image.LANCZOS)
    out_path = f"public/photos/{out_name}"
    c.save(out_path, quality=quality, optimize=True)
    kb = os.path.getsize(out_path) / 1024
    print(f"{out_name}: {c.size} ({kb:.0f}KB)")

# "Expert Coaching" card: Tilkian, player in defensive ready position
crop_resize(tilkian, (487, 180, 1187, 880), (600, 600), "why-angels-1.jpg")

# "Proven Results" card: Fleming, player #14 mid-celebration
crop_resize(fleming, (1025, 150, 1825, 950), (600, 600), "why-angels-2.jpg")

# "Better Value" card: Fleming, player #17 blocking at the net (teammates visible)
crop_resize(fleming, (1500, 200, 2400, 1100), (600, 600), "why-angels-3.jpg")

# Full-width photo band: Fleming, wide crop of the whole scene
crop_resize(fleming, (0, 280, 2400, 1120), (1600, 560), "home-band.jpg")

print("Done. All 4 photos written to public/photos/")
