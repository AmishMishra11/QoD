//  Write a Program to Convert Octal to Decimal.

const convertToDecimal = (num) => {
  let remainder = 0,
    ans = 0;
  quotient = num;

  let i = 0;

  while (quotient > 0) {
    remainder = quotient % 10;
    quotient = quotient / 10;
    quotient = Math.floor(quotient);
    ans = ans + remainder * Math.pow(8, i);
    i++;
  }
  return ans;
};

console.log(convertToDecimal(116));
