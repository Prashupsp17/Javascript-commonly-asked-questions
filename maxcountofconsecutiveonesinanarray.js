// max count of consecutive ones in an array

const arr = [1,0,8,1,1,9,2,1,1,1,1,3,4,1,1,1];

function maxCountOfConsecutiveOne(arr){
let count  = 0;
let maxCount = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] === 1){
        count++;

        if(count > maxCount){
            maxCount = count;
        }
    }else{
        count = 0;
    }

}
return maxCount;
}
console.log(maxCountOfConsecutiveOne(arr));