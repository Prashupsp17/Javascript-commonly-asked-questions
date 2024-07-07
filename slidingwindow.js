// Maximum Sum of subarray oflength K & Min Sum also
const arr =[1,3,2,5,2,1,2,3];
const k = 3;
// output = 10 -> [3,2,5]

function maxSubArray(arr,k){

    if(arr.length < k){
        return null;
    }

    let maxSum = 0;
    let windowSum = 0;

    for(let i=0;i<k;i++){
        windowSum += arr[i];
    }

    maxSum=  windowSum;

    for(let i=k;i<arr.length;i++){
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(windowSum,maxSum);

    }
return maxSum;
}
console.log(maxSubArray(arr,k));