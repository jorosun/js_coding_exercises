export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let sqrNums = [];
  for (let i = 0; i < nums.length; i += 1) {
    sqrNums[i] = nums[i] * nums[i];
  }
  return sqrNums;
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
  let ingredientPresent = false;
  for (let i = 0; i < menu.length; i += 1) {
    let ingredientsArr = menu[i]["ingredients"];
    for (let j = 0; j < ingredientsArr.length; j += 1) {
      if (ingredientsArr[j] === ingredient) {
        ingredientPresent = true;
      }
    }
  }
  return ingredientPresent;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
