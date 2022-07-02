// A program that counts the value of each character and prints the most repeated character?

const getMostChar = (str) => {
  const temp = str.trim().split(" ").join("");
  let newAr = temp.split("");

  const charArr = newAr.filter((item, index) => newAr.indexOf(item) === index);

  let max = -1;
  let answser = {
    char: "",
    no: -1,
  };

  for (let char of charArr) {
    let newMax = 0;
    for (let element of newAr) {
      if (char === element) newMax++;
    }

    if (newMax > max) {
      answser.char = char;
      answser.no = newMax;
      max = newMax;
      newMax = 0;
    }
  }

  return answser;
};
console.log(getMostChar("   hi im amish "));
