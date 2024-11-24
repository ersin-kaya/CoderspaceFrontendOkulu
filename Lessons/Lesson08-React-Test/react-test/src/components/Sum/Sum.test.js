import { expect, test } from "vitest";
import sum from "./Sum";

test("Is the result of the addition operation correct?", () => {
  expect(sum(1, 2)).toBe(3);
});
