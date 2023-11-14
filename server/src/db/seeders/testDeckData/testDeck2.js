import forest from "./forest.json" assert { type: "json" };
import elf from "./llanowarElves.json" assert { type: "json" };
import gruff from "./gruff.json" assert { type: "json" };

const numberOfForests = Array(24).fill(forest);
const numberOfElves = Array(27).fill(elf);
const numberOfGruffs = Array(9).fill(gruff);
const testDeck2 = { deck: [...numberOfForests, ...numberOfElves, ...numberOfGruffs] };

export default testDeck2;
