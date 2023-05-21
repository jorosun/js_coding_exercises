export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let result = null;
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === n) {
      result = nums[i + 1];
      break;
    }
  }
  return result;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = { 0: 0, 1: 0 };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequencies[char] += 1;
  }
  return frequencies;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  const reverse = (num) =>
    parseInt(String(num).split("").reverse().join(""), 10);
  return reverse;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
