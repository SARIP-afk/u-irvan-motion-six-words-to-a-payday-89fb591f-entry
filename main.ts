// Six Words to a Payday — u-irvan-motion-six-words-to-a-payday-89fb591f
// Writes exactly one six-word story (38 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My first paycheck outlived my creator.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
