// Funniest Time Machine Warning Label
// make.fun entry for u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.
// Writes one warning label for a time machine (66 characters) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader's
// container). Node 22, stdlib only, no network, deterministic: the same
// bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Do not change the past. Your grandfather is load-bearing.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
