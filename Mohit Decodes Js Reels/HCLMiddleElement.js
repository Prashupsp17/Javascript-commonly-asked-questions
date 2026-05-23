// Middle element in HCL 
// when arr is odd length, return the middle element
const arr = [10,20,30,40,50];

function middleElement(arr){
    let mid = Math.floor(arr.length/2);
    return arr[mid];
}
console.log(middleElement(arr));

// when arr is even length, return the left middle element

const arr = [10,20,30,50];

function middleElement(arr){
    let mid = Math.floor((arr.length-1)/2);
    return arr[mid];
}
console.log(middleElement(arr));