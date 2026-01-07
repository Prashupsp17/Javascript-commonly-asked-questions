// 560. Subarray Sum Equals K
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

var subarraySum = function(arr, k) {
  let obj = {};
  obj[0] = 1;
    let sum = 0;
    let count  = 0;

    for(let i=0;i<arr.length;i++){
        sum += arr[i];

        if(obj[sum-k] != undefined){
            count  = count + obj[sum-k];
        }

        if(obj[sum] === undefined){
            obj[sum] = 1
        }else{
            obj[sum] = obj[sum] + 1;
        }
    }
    return count;

    
};
console.log(subarraySum([1,2,3], 3)) // 2