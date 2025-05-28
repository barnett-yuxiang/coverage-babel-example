import { add, subtract } from "../src/index";

test("add should return sum", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract should return difference", () => {
  expect(subtract(5, 3)).toBe(2);
});
