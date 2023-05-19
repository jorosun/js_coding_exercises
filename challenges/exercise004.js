export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqrtNums = [];
  let newNum = "";
  for (let i = 0; i < nums.length; i += 1) {
    newNum = Math.sqrt(nums[i]);
    if (Number.isInteger(newNum)) {
      sqrtNums[i] = newNum;
    } else {
      sqrtNums[i] = parseFloat(newNum.toFixed(2));
    }
  }
  return sqrtNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
