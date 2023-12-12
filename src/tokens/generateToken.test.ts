const nodeCrypto = require("crypto");
import { generateToken } from "./index";

globalThis.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
  randomUUID: () => "" as `${string}-${string}-${string}-${string}-${string}`,
  subtle: nodeCrypto.webcrypto.subtle,
};

describe("`generateToken()`", () => {
  it("should return a 3-word token", () => {
    expect(generateToken().split(" ").length).toBe(3);
  });

  it("should not repeat words in the token", () => {
    expect(generateToken()).not.toMatch(/\b(\w+)\b.*\b\1\b/);
  });
});
