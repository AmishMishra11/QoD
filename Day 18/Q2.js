// Given two strings check if the second string is an anagram of first.

const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  if (str1 === str2) return true;

  const obj = {};

  for (let el of str1) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  for (let el of str2) {
    if (!obj[el]) {
      return false;
    }
  }
  return true;
};

console.log(checkAnagram("below", "elbow"));
