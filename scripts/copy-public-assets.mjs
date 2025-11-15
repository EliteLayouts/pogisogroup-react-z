import { mkdirSync, cpSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const pub = join(root, "public");

function copyDir(srcRelative, destRelative) {
  const src = join(root, srcRelative);
  const dest = join(pub, destRelative);
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

copyDir("src/assets/logos", "assets/logos");
