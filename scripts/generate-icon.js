#!/usr/bin/env node
/**
 * Generates images/icon.png (128x128) for the marketplace.
 * Map-pin (teardrop) shape — clearly "pin", not a magnifying glass.
 * Run: node scripts/generate-icon.js
 */
const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const size = 128;
const png = new PNG({ width: size, height: size });

const bg = { r: 30, g: 30, b: 40, a: 255 };
const pin = { r: 74, g: 144, b: 217, a: 255 };

function setPixel(x, y, c) {
  if (x < 0 || x >= size || y < 0 || y >= size) return;
  const i = (size * y + x) << 2;
  png.data[i] = c.r;
  png.data[i + 1] = c.g;
  png.data[i + 2] = c.b;
  png.data[i + 3] = c.a;
}

// Teardrop: circle (head) + triangle (point). Center (64, 52), head radius ~26, point at (64, 108).
function inTeardrop(px, py) {
  const cx = 64, cy = 52, headR = 26, pointY = 108;
  if (py > pointY) return false;
  if (py <= cy - headR + 4) return false;
  // Head: inside circle
  if (py < cy) {
    const dx = px - cx, dy = py - cy;
    return dx * dx + dy * dy <= headR * headR;
  }
  // Taper: inside triangle from (cx - headR, cy) and (cx + headR, cy) to (cx, pointY)
  const left = cx - headR + ((pointY - cy) * (cx - headR - cx)) / (pointY - cy);
  const right = cx + headR + ((pointY - cy) * (cx + headR - cx)) / (pointY - cy);
  const widthAtY = (headR * (pointY - py)) / (pointY - cy);
  return Math.abs(px - cx) <= widthAtY;
}

// Background
for (let i = 0; i < png.data.length; i += 4) {
  png.data[i] = bg.r;
  png.data[i + 1] = bg.g;
  png.data[i + 2] = bg.b;
  png.data[i + 3] = bg.a;
}

// Draw teardrop (map-pin)
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if (inTeardrop(x, y)) setPixel(x, y, pin);
  }
}

const outDir = path.join(__dirname, "..", "images");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "icon.png");
const stream = fs.createWriteStream(outPath);
png.pack().pipe(stream);
stream.on("finish", () => console.log("Written", outPath));
stream.on("error", (err) => { console.error(err); process.exit(1); });
