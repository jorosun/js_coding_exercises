// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return `${firstName.charAt(0).toUpperCase()}.${lastName
    .charAt(0)
    .toUpperCase()}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const newPrice = originalPrice + (originalPrice / 100) * vatRate;

  return Number.isInteger(newPrice)
    ? newPrice
    : parseFloat(newPrice.toFixed(2));

  // if (Number.isInteger(newPrice)) {
  //   return newPrice;
  // } else {
  //   return parseFloat(newPrice.toFixed(2));
  // }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const newPrice = originalPrice - (originalPrice / 100) * reduction;
  return parseFloat(newPrice.toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const mid = Math.round(str.length / 2);

  if (str.length % 2 == 0) {
    return str.substring(mid - 1, mid + 1);
  } else {
    return str.substring(mid - 1, mid);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word) => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type === "Linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  let mean = total / scores.length;
  if (Number.isInteger(mean)) {
    return mean;
  } else {
    return parseFloat(mean.toFixed(2));
  }
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  const divisibleBy3 = n % 3 === 0;
  const divisibleBy5 = n % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    return "fizzbuzz";
  } else if (divisibleBy3 === true) {
    return "fizz";
  } else if (divisibleBy5 === true) {
    return "buzz";
  } else {
    return n;
  }
}
