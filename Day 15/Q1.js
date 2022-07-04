// Given an array of integer nums and an integer target, check if there are two numbers in the array such that they add up to target. Return any one pair that add up to the target

const checkMatch = (arr, target) => {
  for (let el of arr) {
    for (let item of arr) {
      if (el + item === target) {
        return [el, item];
      }
    }
  }
  return [];
};

console.log(checkMatch([3, 7, 11, 15], 18));
