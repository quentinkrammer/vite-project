import { test, expect } from "vitest";
import { three } from "./main";

console.log(import.meta.env.MODE);

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(three);
});
