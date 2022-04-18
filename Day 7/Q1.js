// Write a program that makes all but the last four characters of the string "5565534276455423" to #

const hideStr = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length - 4; i++) {
    newStr += str[i];
  }
  newStr += "####";
  return console.log(newStr);
};

hideStr("5565534276455423");
