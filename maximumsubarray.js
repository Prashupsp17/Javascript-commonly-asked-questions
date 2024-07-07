// Maximum Subarray
const input = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums){
    if(nums.length <1){
        return null;
    }

    let maxSum = nums[0];
    let windowSum = nums[0];

    for(let i=0;i<nums.length;i++){
        windowSum = Math.max(nums[i],windowSum+nums[i]);
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
}
console.log(maxSubArray(input));
