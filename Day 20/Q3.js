// You are given an m x n   integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth  bank. Return the wealth that the richest customer has.  A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const returnWealth = (arr) => {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    const temp = [...arr[i]];
    let newMax = temp.reduce((acc, curr) => (acc += curr));
    if (newMax > max) {
      max = newMax;
    }
  }
  return max;
};

console.log(
  returnWealth([
    [1, 20, 0],
    [3, 2, 4],
  ])
);
