// Infosys Difference Between Max and Min in Array

const arr = [4,9,1,7];
const output = 8;

function findDifference(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return max - min;
}
console.log(findDifference(arr));