const arr = [1,2,3,4,5,6,7,8,9];
const cols = 3;

function matrix(arr, cols) {
    let matrices = [];
    
    // Create the 2D matrix
    for (let i = 0; i < arr.length; i += cols) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(arr[i + j]);
        }
        matrices.push(row);
    }
    
    // Transpose the matrix
    let transposed = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < matrices.length; i++) {
            newRow.push(matrices[i][j]);
        }
        transposed.push(newRow);
    }
    
    return transposed;
}

console.log(matrix(arr, cols));
// OUTPUT
// [
//   [1,4,7],
//   [2,5,8],
//   [3,6,9]
// ]



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Define the number of columns
// let cols = 3;

// function matrix(arr, cols) {
//   let matrices = [];
//   for (let i = 0; i < arr.length; i += cols) {
//     let row = [];
//     for (let j = 0; j < cols; j++) {
//       if (i + j < arr.length) {
//         row.push(arr[i + j]);
//       }
//     }
//     matrices.push(row);
//   }
//   return matrices;
// }

// let result = matrix(arr, cols);
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cols = 3;

// function output(arr,cols){
  
  
//   let matrix = [];
  
//   for(let i=0;i<arr.length;i= i+cols){
//       matrix.push(arr.slice(i,i+cols));
//   }
//   return matrix;
// }
// console.log(output(arr,cols));
