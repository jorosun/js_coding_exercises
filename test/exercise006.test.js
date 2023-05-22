import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";
describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
  });
});

describe("sumMultiples", () => {
  test("returns the sum of the numbers which are divisble by 3 or 5 in the array", () => {
    expect(sumMultiples([5, 3, 7, 8])).toBe(8);
  });
});

describe("sumMultiples", () => {
  test("it works with decimal numbers", () => {
    expect(sumMultiples([1, 5, 3.0, 7, 8])).toBe(8);
  });
});

describe("sumMultiples", () => {
  test("it works with numbers that are divisibe by 3 and 5", () => {
    expect(sumMultiples([1, 5, 3, 7, 8, 15, 30])).toBe(53);
  });
});
