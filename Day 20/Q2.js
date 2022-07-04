// Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

const transpose = (arr) => {
  const tempArr = [];

  for (let j = 0; j < arr.length; j++) {
    const subArr = [];

    for (let i = 0; i < arr.length; i++) {
      subArr.push(arr[i][j]);
    }

    tempArr.push(subArr);
  }

  return tempArr;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
