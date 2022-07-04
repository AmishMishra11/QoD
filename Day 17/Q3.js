// You have been given a string summerFruits that are available in summer, and fruits
//  representing the fruits you have. Find the summer fruits in the fruits. summerFruits is case-sensitive. (a is not equal to A). Each character represents a type of fruit and the fruits present in the summer fruits are unique.

const getFruits = (summerFruits, fruits) => {
  const summerFruit = summerFruits.split("");
  const fruit = fruits.split("");

  let ans = 0;
  for (let item of summerFruit) {
    for (let el of fruit) {
      if (item === el) ans++;
    }
  }

  return ans;
};

console.log(getFruits("aA", "aAAAbbbaac"));
