#!/usr/bin/env bash
set -euo pipefail

# Generates a multi-size favicon.ico from our SVG (fallback to PNG).
# Requirements: imagemagick (convert) and librsvg2-bin.

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
SRC_SVG="$ROOT_DIR/public/brand/favicon-sys.svg"
SRC_PNG="$ROOT_DIR/public/brand/imoblist_logo.png"
OUT_PNG="$ROOT_DIR/public/favicon-256.png"
OUT_ICO="$ROOT_DIR/public/favicon.ico"

if [[ -f "$SRC_SVG" ]]; then
  # Render SVG to 256x256 PNG
  rsvg-convert -w 256 -h 256 "$SRC_SVG" -o "$OUT_PNG"
else
  # Fallback: resize logo png
  convert "$SRC_PNG" -background none -resize 256x256 "$OUT_PNG"
fi

# Build multi-resolution ico
convert "$OUT_PNG" -define icon:auto-resize=256,128,64,48,32,16 "$OUT_ICO"

echo "Generated: $OUT_ICO"
file "$OUT_ICO" >/dev/null
