// Given two strings check if the first string can match the second string after some number of shifts.

const checkSame = (str1, str2) => {
  if (str1.lenght !== str2.lenght) return false;

  for (let el of str1) {
    if (str1 === str2) {
      return true;
    } else {
      str1 = str1.slice(1) + str1.slice(0, 1);
    }
  }
  return false;
};

console.log(checkSame("xyza", "yzxa"));

console.log(checkSame("xyza", "zaxy"));
