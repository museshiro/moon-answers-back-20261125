import { mkdirSync, writeFileSync } from "node:fs";

// Craft: alien-observer — the Moon as the outside watcher. Setup names the
// scale (four billion years of wishes); punch turns it back on the wishers:
// the one being wished upon has never once been wished a good night itself.
// Rhythm: 7 syllables, then 13, punch landing on the final word.
const SETUP = "Four billion years of wishes,";
const PUNCH = " and nobody has ever once wished me a good night.";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SETUP + PUNCH);
