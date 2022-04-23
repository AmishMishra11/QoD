// A program what reads a string and counts the number of characters present in the string

const strChar = (str) => {
  let noOfChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != undefined && str[i] != null) {
      noOfChar++;
    }
  }
  return console.log(noOfChar);
};

strChar("hi im amish");
