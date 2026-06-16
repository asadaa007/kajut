#!/usr/bin/env bash
# Downloads official assets from kajutvendeglo.hu (Webnode CDN)
set -euo pipefail

BASE="https://fe2a5b432a.clvaw-cdnwnd.com/662c8f3e8e1f6cf8d21f61c7a55844dd"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
Q="?ph=fe2a5b432a"

download() {
  local url="$1"
  local out="$2"
  mkdir -p "$(dirname "$out")"
  echo "→ $out"
  curl -fsSL "$url" -o "$out"
}

# Logo
download "${BASE}/200000162-795da7a585/log%C3%B3-2.png${Q}" "${ROOT}/public/images/logo/logo.png"

# Food / platters (700px variants for balance of quality & size)
download "${BASE}/200000587-2b7ef2b7f2/700/Kedvenc%20t%C3%A1l.jpg${Q}" "${ROOT}/public/images/food/hero-platter.jpg"
download "${BASE}/200000566-ed840ed843/700/Babguly%C3%A1s%20990-Ft.jpg${Q}" "${ROOT}/public/images/food/daily-menu.jpg"
download "${BASE}/200000588-3e2a93e2ab/700/B%C5%91s%C3%A9g%20t%C3%A1l.jpg${Q}" "${ROOT}/public/images/food/kajut-tal.jpg"
download "${BASE}/200000566-ed840ed843/700/Babguly%C3%A1s%20990-Ft.jpg${Q}" "${ROOT}/public/images/food/offering-daily.jpg"
download "${BASE}/200000588-3e2a93e2ab/700/B%C5%91s%C3%A9g%20t%C3%A1l.jpg${Q}" "${ROOT}/public/images/food/offering-platters.jpg"
download "${BASE}/200000585-0b9ef0b9f1/700/Grill%20t%C3%A1l.jpg${Q}" "${ROOT}/public/images/food/offering-catering.jpg"
download "${BASE}/200000585-0b9ef0b9f1/Grill%20t%C3%A1l.jpg${Q}" "${ROOT}/public/images/food/catering-spread.jpg"

# Interior / contact
download "${BASE}/200000400-0bfa20bfa5/700/IMG_4265.jpg${Q}" "${ROOT}/public/images/interior/entrance.jpg"
download "${BASE}/200000401-d097fd0982/700/IMG_1505.JPG${Q}" "${ROOT}/public/images/interior/dining-room.jpg"
download "${BASE}/200000401-d097fd0982/700/IMG_1505.JPG${Q}" "${ROOT}/public/images/interior/about-hero.jpg"
download "${BASE}/200000406-8ff5b8ff5e/700/IMG_0073.JPG${Q}" "${ROOT}/public/images/interior/kitchen.jpg"
download "${BASE}/200000401-d097fd0982/700/IMG_1505.JPG${Q}" "${ROOT}/public/images/interior/dining-room.jpg"

# Story section uses dining room
cp "${ROOT}/public/images/interior/dining-room.jpg" "${ROOT}/public/images/interior/dining-room-story.jpg" 2>/dev/null || true

# Gallery
download "${BASE}/200000402-f366df3670/700/IMG_1505-4.JPG${Q}" "${ROOT}/public/images/gallery/gallery-01.jpg"
download "${BASE}/200000404-3b0193b01c/700/IMG_0030.JPG${Q}" "${ROOT}/public/images/gallery/gallery-02.jpg"
download "${BASE}/200000405-949b7949ba/700/IMG_0082.JPG${Q}" "${ROOT}/public/images/gallery/gallery-03.jpg"
download "${BASE}/200000406-8ff5b8ff5e/700/IMG_0073.JPG${Q}" "${ROOT}/public/images/gallery/gallery-04.jpg"
download "${BASE}/200000407-cb60ecb60f/700/IMG_3420.JPG${Q}" "${ROOT}/public/images/gallery/gallery-05.jpg"
download "${BASE}/200000408-a9b35a9b38/700/IMG_0170.JPG${Q}" "${ROOT}/public/images/gallery/gallery-06.jpg"

# Favicon from logo
cp "${ROOT}/public/images/logo/logo.png" "${ROOT}/public/favicon-source.png"

echo "Done. Downloaded official Kajüt Vendéglő assets."
