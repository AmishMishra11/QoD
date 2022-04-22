// Write a Program to convert Decimal to Binary

const convertBinary = (num) => {
  let result = 0;
  let i = 1;
  let remainder = 0;
  while (num != 0) {
    remainder = num % 2;
    num = parseInt(num / 2);
    result = result + remainder * i;
    i = i * 10;
  }
  console.log(result);
};

convertBinary(9);
