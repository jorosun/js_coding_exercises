export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter((n) => n < 1);
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesBegin = names.filter((name) => name.startsWith(char));
  return namesBegin;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = words.filter((word) => word.slice(0, 3) === "to ");
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const int = nums.filter((num) => Number.isInteger(num));
  return int;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const cityNames = users.map(function (user) {
    const cityName = user.data.city.displayName;
    return cityName;
  });
  return cityNames;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const sqrtNums = nums.map(function (num) {
    let newNum = Math.sqrt(num);
    if (Number.isInteger(newNum)) {
      return newNum;
    } else {
      newNum = parseFloat(newNum.toFixed(2));
      return newNum;
    }
  });
  console.log(sqrtNums);
  return sqrtNums;

  /* const sqrtNums = [];
  nums.forEach(function (num) {
    const newNum = Math.sqrt(num);
    if (Number.isInteger(newNum)) {
      sqrtNums.push(newNum);
    } else {
      sqrtNums.push(parseFloat(newNum.toFixed(2)));
    }
  });
  return sqrtNums;
  */
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const containingArr = [];
  sentences.forEach(function (sentence) {
    if (sentence.toUpperCase().includes(str.toUpperCase())) {
      containingArr.push(sentence);
    }
  });
  return containingArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestArr = [];
  let longest = 0;
  triangles.forEach(function (triangle) {
    longest = 0;
    triangle.forEach(function (side) {
      if (longest < side) {
        longest = side;
      }
    });
    longestArr.push(longest);
  });
  return longestArr;
}
