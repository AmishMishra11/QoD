//  Given a string `s`, reverse only all the vowels in the string and return it.

//  The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both cases.

const reverseVowels = (str) => {
  let vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  };

  let tempArr = [];

  let tempStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === vowels[str[i]]) {
      tempArr.push(str[i]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === vowels[str[i]]) {
      tempStr += tempArr.pop();
    } else {
      tempStr += str[i];
    }
  }
  return tempStr;
};

console.log(reverseVowels("neoGCamp"));
