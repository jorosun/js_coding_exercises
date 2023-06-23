export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((n) => n * n);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let camelWords = "";

  for (let i = 0; i < words.length; i += 1) {
    if (i === 0) {
      camelWords = words[i];
    } else {
      let word = words[i];
      camelWords = camelWords + (word.charAt(0).toUpperCase() + word.slice(1));
    }
  }
  return camelWords;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let numberOfSubjects = 0;

  for (let i = 0; i < people.length; i += 1) {
    const subArr = people[i]["subjects"];
    for (let j = 0; j < subArr.length; j += 1) {
      if (subArr[j] != null || subArr[j] != "") {
        numberOfSubjects = numberOfSubjects + 1;
      }
    }
  }
  return numberOfSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let dupArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        dupArr.push(arr2[j]);
      }
    }
  }
  let uniqueArr = [];
  dupArr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });

  return uniqueArr.sort();
}
