let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Define the number of columns
let cols = 3;

function matrix(arr, cols) {
  let matrices = [];
  for (let i = 0; i < arr.length; i += cols) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      if (i + j < arr.length) {
        row.push(arr[i + j]);
      }
    }
    matrices.push(row);
  }
  return matrices;
}

let result = matrix(arr, cols);
console.log(result);
