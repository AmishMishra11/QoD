// Write a program to calculate the sum of N natural digits, as input by the users?

const getSum = (num) => {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(getSum(100));
