// Given an array and size k, break the array into chunks of k-length and return them as an array.

const splitArr = (arr, size) => {
  const res = [];

  let count = 0;
  tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
    count++;
    if (count === size) {
      res.push(tempArr);
      tempArr = [];
      count = 0;
    }

    if (i === arr.length - 1 && tempArr.length !== 0) {
      res.push(tempArr);
    }
  }

  return res;
};

console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
