// Write a JavaScript program that reverses a number.

const myReverse = (number) => {
  let remainder = 0,
    sum = 0;
  quotient = number;

  while (quotient > 0) {
    remainder = quotient % 10;
    quotient = quotient / 10;
    quotient = Math.floor(quotient);
    sum = sum * 10 + remainder;
  }
  return sum;
};

console.log(myReverse(32243));
