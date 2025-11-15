import { mkdirSync, cpSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const dist = join(root, "dist");

function copyDir(srcRelative, destRelative) {
  const src = join(root, srcRelative);
  const dest = join(dist, destRelative);
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

copyDir("src/assets/logos", "assets/logos");
