import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const divisions = [
  'group',
  'cleaning',
  'hygiene',
  'construction',
  'security',
  'energy',
  'marketing',
  'tours',
  'logistics',
];

const projectRoot = path.resolve(process.cwd());
const srcDir = path.join(projectRoot, 'src', 'assets', 'logos');
const outDir = path.join(projectRoot, 'public', 'assets', 'logos-enhanced');

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function enhance(inputFile, outputFilePng, outputFileWebp) {
  const img = sharp(inputFile, { failOnError: false });
  const meta = await img.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  const target = 300; // minimum target for both dimensions; preserve aspect ratio
  const resizeOptions = { fit: 'inside', kernel: sharp.kernel.lanczos3, withoutEnlargement: false };

  // Choose resize so the smallest dimension becomes at least 300
  const scaleW = width ? Math.max(1, (target / Math.min(width, height)) * (height <= width ? width / height : 1)) : 1;
  const scaleH = height ? Math.max(1, (target / Math.min(width, height)) * (width < height ? height / width : 1)) : 1;

  const resized = sharp(inputFile)
    .resize({ width: Math.round(width * scaleW), height: Math.round(height * scaleH), ...resizeOptions })
    .sharpen()
    .withMetadata({ density: 300 });

  await resized.png({ compressionLevel: 9 }).toFile(outputFilePng);
  await resized.webp({ quality: 95 }).toFile(outputFileWebp);
}

async function run() {
  await ensureDir(outDir);
  for (const div of divisions) {
    const srcDiv = path.join(srcDir, div);
    const outDiv = path.join(outDir, div);
    await ensureDir(outDiv);

    for (const variant of ['main-logo-blue', 'main-logo-white']) {
      const srcPng = path.join(srcDiv, `${variant}.png`);
      try {
        await fs.promises.access(srcPng, fs.constants.R_OK);
      } catch {
        continue;
      }

      const outPng = path.join(outDiv, `${variant}.png`);
      const outWebp = path.join(outDiv, `${variant}.webp`);
      await enhance(srcPng, outPng, outWebp);
      console.log('Enhanced', div, variant);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

