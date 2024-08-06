// Write a function that return true
//  if every value in arr1 has corresponding value squared in array2. The frequency of values must be same ?

const arr1 = [2,1,3];
const arr2 = [4,1,9];

function square(arr1,arr2){
    const sqrt = arr1.map((num) => num*num);

    sqrt.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);

    return JSON.stringify(sqrt) === JSON.stringify(arr2);
}
console.log(square(arr1,arr2));