// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with caracter c2 in the given string.

const replaceLetter = (str, car1, car2) => {
  const tempStr = str.split("");
  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i] === car1) {
      tempStr[i] = car2;
    }
  }
  console.log(tempStr.join(""));
};

replaceLetter("hi im amish", "i", "I");
