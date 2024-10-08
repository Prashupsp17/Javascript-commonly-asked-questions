let arr = [3,4,5,6,7,8];
let n= 2;
let output= [7, 8, 3, 4, 5, 6];

function rotateByk(arr,n){

    let output = [];

    for(let i=0;i<n;i++){
        output.unshift(arr.pop());
    }
    return output.concat(arr);

}
console.log(rotateByk(arr,n));