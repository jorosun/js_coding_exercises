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
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter((sentence) =>
    sentence.toUpperCase().includes(str.toUpperCase())
  );
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map((triangle) => Math.max.apply(null, triangle));
}
