// Given an array of numbers, your function should return an array in the ascending order

const array = [100, 83, 32, 9, 45, 61];
const sortArr = (arr) => [...arr].sort((a, b) => a - b);
console.log(sortArr(array));
