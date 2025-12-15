// Second Largest Element in an Array
function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
    
}

let arr = [4, 9, 0, 2, 8, 7, 1];
let result = secondLargest(arr);
console.log(result);

// What if there are duplicates in the array ? 

function secondLargest(arr1){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }else if(arr[i] > secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}




let arr1 = [4, 9, 0,9, 2, 8, 7, 1];
console.log(secondLargest(arr1));

// const arr = [21, 33,4, 5, 22, 3, 2, 9, 6, 8,44,43,1, 2, 3, 4, 5, 6, ];

// const secondLargest = (arr) =>{
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j]= temp;
//         }
//     }

//   }
//   return arr[arr.length-2];
// }
// console.log(secondLargest(arr));


