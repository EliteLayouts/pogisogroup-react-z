import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve(".");
const logosDir = path.join(root, "src", "assets", "logos");
const reportDir = path.join(root, "reports");
fs.mkdirSync(reportDir, { recursive: true });

const maxWidth = 360;

const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((d) => {
      const f = path.join(dir, d.name);
      return d.isDirectory() ? walk(f) : [f];
    });

const files = walk(logosDir).filter((f) => f.toLowerCase().endsWith(".png"));

const results = [];

for (const file of files) {
  const buf = fs.readFileSync(file);
  const img = sharp(buf);
  const meta = await img.metadata();
  const targetWidth = Math.min(meta.width ?? maxWidth, maxWidth);
  const base = path.basename(file).replace(/\.png$/i, "");
  const dir = path.dirname(file);
  const webpOut = path.join(dir, `${base}.webp`);
  const pngOut = path.join(dir, `${base}.png`);

  await img
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(webpOut);

  await img
    .resize({ width: targetWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(pngOut);

  const statIn = fs.statSync(file);
  const statWebp = fs.statSync(webpOut);
  const statPng = fs.statSync(pngOut);

  results.push({
    file,
    width: meta.width,
    height: meta.height,
    inputKB: Math.round(statIn.size / 1024),
    webpKB: Math.round(statWebp.size / 1024),
    pngKB: Math.round(statPng.size / 1024),
  });
}

fs.writeFileSync(path.join(reportDir, "logo-audit.json"), JSON.stringify(results, null, 2));
console.log("Logo optimization completed. Report at reports/logo-audit.json");

