import SayHello from "./SayHello";
import { test, expect } from "vitest"; // ESM

test("Is the parameter converted to uppercase?", () => {
  expect(SayHello("hi")).toBe("HI");
});
