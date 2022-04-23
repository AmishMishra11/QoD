// Given a and b, your function should return the value of a^b

const power = (var1, var2) => {
  let ans = 1;
  for (let i = 0; i < var2; i++) {
    ans *= var1;
  }
  return console.log(ans);
};

power(2, 3);
