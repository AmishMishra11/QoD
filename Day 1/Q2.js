// Given an array, your funciton should return the length of the array.

const arrayLength = (arr) => {
  let i = 0;
  let ans = 0;
  while (arr[i] != undefined) {
    i++;
    ans++;
  }
  console.log(ans);
};

arrayLength([1, 5, 3, 7, 8]);
