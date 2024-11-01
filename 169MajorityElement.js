// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

const  nums = [3,2,3];
var majorityElement = function(nums) {
    let result = 0;
 let obj ={};

 for(let i=0;i<nums.length;i++){
     let num = nums[i];

     if(obj[num] > 0){
         obj[num]++;
     }else{
         obj[num] = 1;
     }
 }

 for(let [key,value] of Object.entries(obj)){
     if(value > nums.length/2){
         result = +key;
     }
 }
 return result;
};

console.log(majorityElement(nums));