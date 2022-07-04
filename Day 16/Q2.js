// Given an array nums with length n, return the element which occurred at least n/2 times in the array.

const getElement = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  const half = arr.length / 2;

  for (let key in obj) {
    if (obj[key] > half) return key;
  }

  return "No Element";
};

console.log(getElement([2, 2, 1, 1, 1, 2, 2, 2]));
