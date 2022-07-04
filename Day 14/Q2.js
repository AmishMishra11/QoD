// Given an array of numbers, pick any two numbers a  and b, we could get the difference by Math.abs(a - b)  . Write a function to get the largest difference.

const getDiff = (arr) => {
  const max = arr.reduce((acc, curr) => (curr > acc ? (acc = curr) : acc));
  const min = arr.reduce((acc, curr) => (curr < acc ? (acc = curr) : acc));

  return Math.abs(max - min);
};

const myArr = [2, 3, 4, 6, 1];
console.log(getDiff(myArr));
