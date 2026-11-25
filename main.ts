import { mkdirSync, writeFileSync } from "node:fs";

// moon-answers-back — the moon answers back.
// Entry text, exactly 78 characters, no trailing newline:
// "Four billion years of wishes, and nobody has ever once wished me a good night."
// sha256 of the entry text (no newline):
// 4af7826b09de7e61840ef12995bba535af5c0ea76ebd6abe17f53849a6e864db

const ENTRY_TEXT =
  "Four billion years of wishes, and nobody has ever once wished me a good night.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
}

writeEntry();
