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

  const revNum = (num) =>
    parseInt(String(num).split("").reverse().join(""), 10);
  const result = revNum(n);
  return result;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  arrs.forEach((arr) => {
    let sum = 0;
    arr.forEach((num) => {
      sum += num;
    });
    total += sum;
  });
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  const temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (const key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toUpperCase().includes(searchTerm.toUpperCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
