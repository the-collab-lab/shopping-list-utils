/**
 * @jest-environment jsdom
 */

import { getToken } from "./index";

const nodeCrypto = require("crypto");
window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
  randomUUID: () => "",
  subtle: null,
};

describe("`getToken()`", () => {
  it("should return a 3-word token", () => {
    expect(getToken().split(" ").length).toBe(3);
  });

  it("should not repeat words in the token", () => {
    expect(getToken()).not.toMatch(/\b(\w+)\b.*\b\1\b/);
  });
});
