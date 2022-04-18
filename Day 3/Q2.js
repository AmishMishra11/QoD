// Given an array and two numbers, your funciton should replace all the entries of the first number in an array with the second number

const array = [1, 5, 3, 5, 6, 8];

const replaceNumber = (arr, num1, num2) => {
  let newArray = [...arr];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === num1) newArray[i] = num2;
  }
  return newArray;
};

console.log(replaceNumber(array, 5, 10));
