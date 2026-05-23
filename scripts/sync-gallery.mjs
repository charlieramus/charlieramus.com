/**
 * sync-gallery.mjs
 *
 * Reads public/photos/gallery.json, measures each image, and writes
 * data/photos.ts — the generated file photography-gallery.tsx imports.
 *
 * Run with: npm run sync-gallery
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { imageSize } from "image-size";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const photosDir = join(root, "public", "photos");
const galleryPath = join(photosDir, "gallery.json");
const outputPath = join(root, "data", "photos.ts");

const entries = JSON.parse(readFileSync(galleryPath, "utf8"));

const photos = entries.map((entry, i) => {
  const code = String(i + 1).padStart(4, "0");
  const imgPath = join(photosDir, entry.file);

  let ratio = 1.5; // fallback if dimensions can't be read
  try {
    const buf = readFileSync(imgPath);
    const { width, height } = imageSize(buf);
    ratio = Math.round((width / height) * 1000) / 1000;
  } catch {
    console.warn(`  ⚠ Could not read dimensions for ${entry.file} — defaulting to 1.5`);
  }

  return {
    src: `/photos/${entry.file}`,
    alt: entry.caption,
    ratio,
    placeholder: false,
    code,
    caption: entry.caption,
  };
});

const lines = photos.map((p) => {
  const escaped = JSON.stringify(p.caption).replace(/\\/g, "\\\\");
  return (
    `  { src: ${JSON.stringify(p.src)}, alt: ${JSON.stringify(p.alt)},` +
    ` ratio: ${p.ratio}, placeholder: false, code: "${p.code}", caption: ${escaped} }`
  );
});

const output = `// AUTO-GENERATED — do not edit directly.
// Edit public/photos/gallery.json, then run: npm run sync-gallery

export type Photo = {
  src: string;
  alt: string;
  ratio: number;
  placeholder: boolean;
  caption?: string;
  code?: string;
};

export const photos: Photo[] = [
${lines.join(",\n")}
];
`;

writeFileSync(outputPath, output, "utf8");
console.log(`✓ Synced ${photos.length} photos → data/photos.ts`);
