import forest from "./forest.json" assert { type: "json" };
import elf from "./llanowarElves.json" assert { type: "json" };
import gruff from "./gruff.json" assert { type: "json" };

const numberOfForests = Array(17).fill(forest);
const numberOfElves = Array(27).fill(elf);
const numberOfGruffs = Array(16).fill(gruff);
const testDeck1 = { deck: [...numberOfForests, ...numberOfElves, ...numberOfGruffs] };

export default testDeck1;
