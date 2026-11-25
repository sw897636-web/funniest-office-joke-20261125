// The Funniest Office Joke, Judged Head to Head — entry program (v2 final).
// Writes one original one-line office joke (1-200 chars, exactly one line,
// no trailing newline) to entry.txt, deterministically, using only the
// Node standard library. No network, no environment secrets.
//
// The joke: the office printer jams on deadline day — the scene the judge
// brief itself names — so IT books a meeting to fix it, and the meeting
// inherits the jam. Setup, then a turn, punchline last. v2 sharpens v1 by
// naming IT as the actor (the people who would actually book that meeting),
// which makes the scene concrete and the turn land harder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our printer only jams on deadline day, so IT booked a meeting to fix it, and the meeting has been jammed for three weeks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
