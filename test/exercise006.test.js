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

  test("returns the sum of the numbers which are divisble by 3 or 5 in the array", () => {
    expect(sumMultiples([5, 3, 7, 8])).toBe(8);
  });

  test("it works with decimal numbers", () => {
    expect(sumMultiples([1, 5, 3.0, 7, 8])).toBe(8);
  });

  test("it works with numbers that are divisibe by 3 and 5", () => {
    expect(sumMultiples([1, 5, 3, 7, 8, 15, 30])).toBe(53);
  });
});

describe("isValidDNA", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });

  test("returns true if string contains C,G,T or A only", () => {
    expect(isValidDNA("ACCGTA")).toBe(true);
  });

  test("returns false if string contains different letters", () => {
    expect(isValidDNA("ABCDGTA")).toBe(false);
  });

  test("returns false if string contains lowercase letters", () => {
    expect(isValidDNA("accgta")).toBe(false);
  });
  test("returns false if string contains numbers", () => {
    expect(isValidDNA("ACC12TA")).toBe(false);
  });
  test("returns false if string contains punctuation characters", () => {
    expect(isValidDNA("ACC!G?A")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });

  test("it throws an error if not a valid DNA string", () => {
    expect(() => {
      getComplementaryDNA("HCJK");
    }).toThrow("Not a valid DNA string");
  });

  test("returns correct Complementary DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });

  test("returns correct Complementary DNA if multiples of same character", () => {
    expect(getComplementaryDNA("ACCTGTA")).toBe("TGGACAT");
  });
});
