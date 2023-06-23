export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((n) => n < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name.startsWith(char));
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => word.slice(0, 3) === "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => Number.isInteger(num));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map((num) =>
    Number.isInteger(Math.sqrt(num))
      ? Math.sqrt(num)
      : parseFloat(Math.sqrt(num).toFixed(2))
  );

  // const sqrtNums = nums.map(function (num) {
  //   let newNum = Math.sqrt(num);
  //   if (Number.isInteger(newNum)) {
  //     return newNum;
  //   } else {
  //     newNum = parseFloat(newNum.toFixed(2));
  //     return newNum;
  //   }
  // });
  // return sqrtNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const containingArr = sentences.filter((sentence) =>
    sentence.toUpperCase().includes(str.toUpperCase())
  );

  return containingArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestArr = triangles.map(function (triangle) {
    const longest = Math.max.apply(null, triangle);
    return longest;
  });
  return longestArr;
}
