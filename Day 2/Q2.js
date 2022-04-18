// Given an array and an item, your funciton should return the index at which the item is present.

const indexOf = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return console.log(i);
    }
  }
  return console.log("Item not present");
};

indexOf([1, 6, 3, 5, 8, 9], 3);
