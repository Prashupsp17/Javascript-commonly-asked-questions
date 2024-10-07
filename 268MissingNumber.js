// missing element in array

// 268. Missing Number
// Solved
// Easy
// Topics
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

const nums = [3,0,1];

// It has 0(1) time and space complexity as there is no nestedloops

var missingNumber = function(nums) {

    let n = nums.length;
    let expectedSum = (n*(n+1)/2);
    let actualSum = 0;

    for(let i=0;i<n;i++){
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}
console.log(missingNumber(nums));

function missingelementinArray(arr,n){

    for(let i=1;i<=n;i++){
        let found = false;

        for(let j=0;j<arr.length;j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        if(!found){
            return i;
        }
    }
    return -1;

}
const arr=[1,2,3,5,6];
const n = 5;

console.log(missingelementinArray(arr,n));
