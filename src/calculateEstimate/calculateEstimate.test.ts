import { calculateEstimate } from "./index";

describe("Test the calculateEstimate function", () => {
  it("returns daysSinceLastTransaction if there is less than 2 purchases", () => {
    expect(calculateEstimate(14, 2, 0)).toEqual(2);
    expect(calculateEstimate(14, 2, 1)).toEqual(2);
  });

  it("calculates purchases correctly if interval never changes", () => {
    for (let i = 0; i < 20; i++) {
      expect(calculateEstimate(2, 2, i)).toEqual(2);
    }
  });

  it("calculates purchases correctly if interval goes down by 1 every purchase", () => {
    for (let i = 0; i < 20; i++) {
      expect(calculateEstimate(20 - i, 20 - i, i)).toEqual(20 - i);
    }
  });

  it("calculates purchases correctly if interval goes up by 1 every purchase", () => {
    for (let i = 0; i < 20; i++) {
      expect(calculateEstimate(20 + i, 20 + i, i)).toEqual(20 + i);
    }
  });

  it("slowly reaches estimate from above if interval stays the same", () => {
    // This will never truly reach 15
    const estimates = [50, 38, 29, 23, 19, 17, 16, 16, 16, 16];
    estimates.forEach((estimate, i, arr) => {
      if (i + 1 == arr.length) return;
      expect(calculateEstimate(estimate, 15, 2 + i)).toEqual(arr[i + 1]);
    });
  });

  it("slowly reaches estimate from below if interval stays the same", () => {
    // This will never truly reach 100
    const estimates = [50, 67, 80, 89, 94, 97, 98, 99, 99, 99];
    estimates.forEach((estimate, i, arr) => {
      if (i + 1 == arr.length) return;
      expect(calculateEstimate(estimate, 100, 2 + i)).toEqual(arr[i + 1]);
    });
  });
});
