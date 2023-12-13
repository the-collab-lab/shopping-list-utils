import { generateToken } from "./generateToken";

describe("`generateToken()`", () => {
  it("should return a 3-word token", () => {
    expect(generateToken().split(" ").length).toBe(3);
  });

  it("should not repeat words in the token", () => {
    expect(generateToken()).not.toMatch(/\b(\w+)\b.*\b\1\b/);
  });
});
