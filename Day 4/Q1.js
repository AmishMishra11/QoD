// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted form the user

const findMin = (...args) =>
  console.log(
    args.reduce(
      (acc, curr) => (acc > curr ? (acc = curr) : (acc = acc)),
      Infinity
    )
  );
findMin(3, 5);
findMin(3, 5, 9, 1);
