// Given an array `arr` with different counts of numbers, we have to find the number with the least frequency and return it.
// If there are two or more numbers with the same least frequency they return the biggest number.

const getLestFreq = (arr) => {
  let max = arr.length;

  let obj = {};
  for (let i = 0; i < max; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let num = 0;
  for (let key in obj) {
    if (obj[key] <= max) {
      max = obj[key];

      if (Number(key) > num) {
        num = Number(key);
      }
    }
  }
  return num;
};

console.log(getLestFreq([2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 5, 5, 5, 6, 6, 8, 8]));
