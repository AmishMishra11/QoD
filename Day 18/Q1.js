// Given a string, str, return the length of the last word.

const getLast = (str) => {
  const tempStr = str.split(" ");
  return tempStr[tempStr.length - 1].length;
};

console.log(getLast("hello neoGrammers you guys rock"));
