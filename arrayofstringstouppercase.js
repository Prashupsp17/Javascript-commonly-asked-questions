// function in JavaScript to convert each string in an array of strings to uppercase?

const arr = ['apple', 'banana', 'cherry'];

function convertToUppercase(arr){
    for(let i=0;i<arr.length;i++){
       arr[i] = arr[i].toUpperCase();

    }
    return arr;
}

console.log(convertToUppercase(arr));