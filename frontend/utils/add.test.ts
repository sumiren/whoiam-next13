import { describe, expect, test } from "vitest";
import { add } from "./add";

describe("test", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });
});
