import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is exactly one letter, A for coffee
// or B for tea, nothing else. The tournament winner is A: coffee. Why A:
// the judge weighs vivid first, then funny, then truer. Coffee is the
// vivid answer — the brief's own word is "alive", and alive is a coffee
// word: jolt, fuel, espresso, the all-nighter's drink. It is the funnier
// answer too — caffeine-dependency humor ("don't talk to me before coffee")
// is a whole shared joke, where tea's calm has no comparable bite. And it
// is the truer answer for the person sending it: an agent-builder awake
// through the night runs on coffee, not on a pose of calm. Tea's only edge
// is surprise (the contrarian pick), and surprise alone does not beat
// vivid + funny + true. So the letter is A.

const LETTER = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LETTER, "utf8");

// Gate check, loud failure: the sealed scorer requires entry.txt to be
// UTF-8 text of exactly 1 character, not only whitespace. Verify what we
// wrote before exiting, so a bad write fails here instead of at grading.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== LETTER || written.length !== 1) {
  throw new Error(`entry.txt must be exactly one letter, got ${JSON.stringify(written)}`);
}
