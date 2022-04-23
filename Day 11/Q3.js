// Write a Program to cyclically Rotate a Number by X position in the left direction, provided by the user.

const rotateNumber = (num, rotation) => {
  const strNum = JSON.stringify(num);

  const digits = strNum.split("");
  const result = [];

  for (let i = 0; i < strNum.length - rotation; i++) {
    result.push(digits[i + rotation]);
  }

  const rotatedNum = strNum.slice(0, rotation);

  return console.log([...result, ...rotatedNum]);
};

rotateNumber(12345, 2);
