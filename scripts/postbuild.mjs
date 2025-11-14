import { mkdirSync, cpSync } from "fs";
import { join } from "path";

const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");
const targetNextDir = join(standaloneDir, ".next");

mkdirSync(targetNextDir, { recursive: true });
cpSync(join(root, ".next", "static"), join(targetNextDir, "static"), { recursive: true });

mkdirSync(standaloneDir, { recursive: true });
cpSync(join(root, "public"), join(standaloneDir, "public"), { recursive: true });

