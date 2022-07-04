// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

const rotate = (arr) => {
  const tempArr = [];

  for (let j = 0; j < arr.length; j++) {
    const subArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      subArr.push(arr[i][j]);
    }

    tempArr.push(subArr);
  }

  return tempArr;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
