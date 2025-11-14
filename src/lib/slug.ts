export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function uniqueSlugs(names: string[]) {
  const used: Record<string, boolean> = {};
  const map: Record<string, string> = {};
  for (const name of names) {
    const base = slugify(name);
    let candidate = base;
    let i = 1;
    while (used[candidate]) {
      i += 1;
      candidate = `${base}-${i}`;
    }
    used[candidate] = true;
    map[name] = candidate;
  }
  return map;
}
