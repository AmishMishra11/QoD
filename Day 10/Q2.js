// Write a JavaScript porgram to compute the sum of all the digits that occure in a given string.

const computeSum = (str) => {
  const strArr = str.split("");
  const sum = strArr.reduce((acc, curr) => (acc += Number(curr)), 0);
  return console.log(sum);
};

computeSum("1234");
