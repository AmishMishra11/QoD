// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZero = (arr) => {
  let counter = 0;

  const temparr = arr.filter((item) => {
    item !== 0 && counter++;
    return item !== 0;
  });

  for (let i = 0; i < counter; i++) {
    temparr.push(0);
  }

  return temparr;
};

console.log(moveZero([0, 2, 0, 3, 12, 0]));
