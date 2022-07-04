// Given an array arr with different counts of numbers, we have to find the number with the most frequency and return it.
// If there are two or more numbers with the same most frequency they return the biggest number.

const mostFreq = (arr) => {
  const freq = {};
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  let maxCount = 0,
    res = -1;
  for (let [key, value] of Object.entries(freq)) {
    if (value > maxCount) {
      maxCount = value;
      res = key;
    }
  }
  for (let [key, value] of Object.entries(freq)) {
    if (value === maxCount && Number(key) > Number(res)) {
      res = key;
    }
  }
  return Number(res);
};

const myArr = [1, 2, 5, 2, 2, 4, 6, 6, 2, 3, 9];

console.log(mostFreq(myArr));
