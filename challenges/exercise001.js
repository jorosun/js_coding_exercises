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

  return (
    firstName.substring(0, 1).toUpperCase() +
    "." +
    lastName.substring(0, 1).toUpperCase()
  );
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const newPrice = originalPrice + (originalPrice / 100) * vatRate;

  if (Number.isInteger(newPrice)) {
    return newPrice;
  } else {
    return parseFloat(newPrice.toFixed(2));
  }
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

  let i = 0;

  for (i = 0; i < words.length; i += 1) {
    words[i] = reverseWord(words[i]);
  }
  return words;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let i = 0;
  let numberUsers = 0;

  for (i = 0; i < users.length; i += 1) {
    if (users[i]["type"] === "Linux") {
      numberUsers = numberUsers + 1;
    }
  }
  return numberUsers;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
