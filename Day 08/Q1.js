// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted by the user.

const findMax = (...args) => {
  let result = -Infinity;
  for (let i = 0; i < args.length; i++) {
    if (result < args[i]) {
      result = args[i];
    }
  }
  return console.log(result);
};

findMax(3, 5);
findMax(3, 5, 9, 1);
