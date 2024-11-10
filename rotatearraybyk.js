let arr = [3,4,5,6,7,8];
let n= 2;
let output= [7, 8, 3, 4, 5, 6];

function rightrotateByk(arr,n){


    for(let i=0;i<n;i++){
        arr.unshift(arr.pop());
    }
 
     return arr;
}
// console.log(rightrotateByk(arr,n));

function leftRotateByK(arr,n){
    for(let i=0;i<n;i++){
        arr.push(arr.shift());
    }
    return arr;

}
console.log(leftRotateByK(arr,n));