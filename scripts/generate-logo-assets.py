#!/usr/bin/env python3
"""Generate transparent-background logo assets from solid-background source files."""
from PIL import Image

def remove_background(src_path, out_path, tolerance=10, crop_padding=20):
    img = Image.open(src_path).convert("RGBA")
    bg = img.getpixel((2, 2))[:3]
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            dist = ((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2) ** 0.5
            if dist < tolerance:
                pixels[x, y] = (r, g, b, 0)
            elif dist < tolerance * 2.5:
                fade = int(255 * (dist - tolerance) / (tolerance * 1.5))
                pixels[x, y] = (r, g, b, min(a, max(0, fade)))
    bbox = img.getbbox()
    if bbox:
        left = max(bbox[0] - crop_padding, 0)
        top = max(bbox[1] - crop_padding, 0)
        right = min(bbox[2] + crop_padding, img.width)
        bottom = min(bbox[3] + crop_padding, img.height)
        img = img.crop((left, top, right, bottom))
    img.save(out_path)
    print(f"Saved {out_path} ({img.size[0]}x{img.size[1]})")

if __name__ == "__main__":
    LOGOS = "/Users/jaredsanchez/Desktop/Angels/Logos"
    remove_background(f"{LOGOS}/White Background Logo.png", "public/emblem.png")
    remove_background(f"{LOGOS}/AngelsLogo_Black_Background.png", "public/wordmark.png")

    emblem = Image.open("public/emblem.png")
    emblem.save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("Saved public/favicon.ico")
