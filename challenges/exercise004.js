export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNumsArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < 1) {
      smallNumsArr.push(nums[i]);
    }
  }
  return smallNumsArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBegArr = [];
  for (let i = 0; i < names.length; i += 1) {
    if (names[i].startsWith(char)) {
      namesBegArr.push(names[i]);
    }
  }
  return namesBegArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbsArr = [];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].slice(0, 3) === "to ") {
      verbsArr.push(words[i]);
    }
  }
  return verbsArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let intArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (Number.isInteger(nums[i])) {
      intArr.push(nums[i]);
    }
  }
  return intArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let cityNames = [];
  let userDataArr = [];
  let userDataCityArr = [];

  for (let i = 0; i < users.length; i += 1) {
    userDataArr = users[(i, "data")];
    console.log(userDataArr);
    for (let j = 0; j < userDataArr.length; j += 1) {
      userDataCityArr = users[(i, j["city"])];
      console.log(userDataArr);
      for (let k = 0; k < userDataCityArr.length; k += 1) {
        console.log(users[(i, j[k[("id", "displayName")]])]);
        cityNames.push(users[(i, j[k[("id", "displayname")]])]);
      }
    }
  }
  return cityNames;
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
  let containingArr = [];
  for (let i = 0; i < sentences.length; i += 1) {
    if (sentences[i].toUpperCase().includes(str.toUpperCase())) {
      containingArr.push(sentences[i]);
    }
  }
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
    console.log(longest);
    longestArr.push(longest);
  }
  return longestArr;
}
