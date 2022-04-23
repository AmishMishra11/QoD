// Write a program to print N odd number in dececnding order.

const giveOdd = (num) => {
  let a = [];
  let j = 1;
  for (let i = 0; i < num; i++) {
    a.push(j);
    j += 2;
  }

  return console.log(a.reverse());
};

giveOdd(4);
