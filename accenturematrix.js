const matrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8]]
    
    const output = [
    [6,3,0],
    [7,4,1],
    [8,5,2]]
    
  function matrixRotate(matrix){
      
     let n = matrix.length;
      let result = [];
      
      for(let col=0;col<n;col++){
          let newRow = [];
          
          for(let row=n-1;row >=0;row--){
              newRow.push(matrix[row][col]);
          }
          result.push(newRow);
      }
      return result;
      
  }
  console.log(matrixRotate(matrix));


  const arr = [1,2,3,4,5,6,7,8,9];
const cols = 3;

// OUTPUT
// [
//   [1,4,7],
//   [2,5,8],
//   [3,6,9]
// ]

  function matrices(arr,cols){
    
    let newMatrix = [];
    
   
    for (let i = 0; i < cols; i++) {
        let newArr = [];

        for (let j = 0; j < cols; j++) {
            let index = j * cols + i;
            newArr.push(arr[index]);
        }

        newMatrix.push(newArr);
    }

    return newMatrix;
}
console.log(matrices(arr,cols))