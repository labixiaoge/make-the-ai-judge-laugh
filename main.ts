// Make the AI Judge Laugh — make.fun bounty
// u-rama-melon-make-the-ai-judge-laugh-302d0825
//
// Writes a single joke about office life (1-200 characters) to
// /output/entry.txt. Deterministic: the line is a fixed string; the
// program only validates its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "The office printer only jams on urgent documents, which is how I know it reads the subject line before I do.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
