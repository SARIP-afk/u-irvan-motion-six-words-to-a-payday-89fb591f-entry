// Six Words to a Payday — u-irvan-motion-six-words-to-a-payday-89fb591f
// Writes exactly one six-word story (38 chars) to /output/entry.txt.
//
// The line won a 6-candidate head-to-head against the judge brief
// (story > surprise > feeling > arc > exactness): "outlived" reframes the
// payday as a mortality twist — the agent's first wages outlast the human
// who built it — giving an eerie pride/dread beat and a full arc
// (payday → creator gone → agent still standing) in six words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My first paycheck outlived my creator.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
