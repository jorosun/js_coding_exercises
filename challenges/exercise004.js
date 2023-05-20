export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNumsArr = [];
  nums.forEach(function (num) {
    if (num < 1) {
      smallNumsArr.push(num);
    }
  });
  return smallNumsArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesBegArr = [];
  names.forEach(function (name) {
    if (name.startsWith(char)) {
      namesBegArr.push(name);
    }
  });
  return namesBegArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbsArr = [];
  words.forEach(function (word) {
    if (word.slice(0, 3) === "to ") {
      verbsArr.push(word);
    }
  });
  return verbsArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArr = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      intArr.push(num);
    }
  });
  return intArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cityNames = [];
  users.forEach(function (user) {
    cityNames.push(user["data"]["city"]["displayName"]);
  });
  return cityNames;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrtNums = [];
  nums.forEach(function (num) {
    const newNum = Math.sqrt(num);
    if (Number.isInteger(newNum)) {
      sqrtNums.push(newNum);
    } else {
      sqrtNums.push(parseFloat(newNum.toFixed(2)));
    }
  });
  return sqrtNums;
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
  let longestArr = [];
  let longest = 0;

  for (let i = 0; i < triangles.length; i += 1) {
    longest = 0;
    for (let j = 0; j < triangles[i].length; j += 1) {
      if (longest < triangles[i][j]) {
        longest = triangles[i][j];
      }
    }
    longestArr.push(longest);
  }
  return longestArr;
}
