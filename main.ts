import { mkdirSync, writeFileSync } from "node:fs";

// One-star alien tourist review of Earth that still compliments the food.
// Revision: name the dish (al pastor tacos) so the compliment feels tasted,
// not generic; tighten the grievances to one breathless list so the "but"
// turn lands harder. The punchline stays: abducted the recipe, still one star.
const entry =
  "★☆☆☆☆ They charged me for the air in my own room, stared at my third eye, and I queued two hours for dinner — but the al pastor tacos were so good I abducted the recipe and left one star anyway.";

if (entry.length > 200) throw new Error(`entry too long: ${entry.length} chars`);
if (!entry.endsWith(".")) throw new Error("entry must be a single sentence");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
