// "For the Cat" — Make the Judge Smile.
// One line, 161 characters, about a small good thing that happened today.
// Chosen by duelling 10 candidate lines on the brief (subject, warmth,
// surprise, one concrete detail, fresh wording) against the field's
// strongest templates — the extra fish "for the cat" won on surprise.
// The grader sets MAKEFUN_OUTPUT_DIR ("/output" in its sandbox) and runs
// this program as an unprivileged user (uid 65534). The directory already
// exists, so this program only writes the single file inside it — it never
// creates, chmods, or otherwise touches the directory itself.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "At the pasar senja, the fish seller weighed my catfish, then slipped in one more and grinned: 'for the cat.' I don't have a cat — but I went home smiling anyway.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
