// 136. Single Number
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// My solution 

// var singleNumber = function(nums) {
//     let obj = {}

//    for(let i=0;i<nums.length;i++){
//        let num = nums[i];

//        if(obj[num] > 0){
//            obj[num]++;
//        }else{
//            obj[num] = 1;
//        }
//    }

//  for(let [key,value] of Object.entries(obj)){
//        if(value === 1){
//           return +key; 
//        }
//    }
// };

//    XOR solution bitwise manipulation

// var singleNumber = function(nums) {
//   let result = 0;

//   for(let i=0;i<nums.length;i++){
//      result ^= nums[i];
//   }
//   return result;
// };
// console.log(singleNumber(nums));

let a = 5; // 0101
let b = 3; // 0011

a = a ^ b; // Now a is 6 (0110)
b = a ^ b; // Now b is 5 (0101)
a = a ^ b; // Now a is 3 (0011)

// console.log(a, b);
const nums = [4,1,2,1,2];
var singleNumber = function(nums) {
  let xor = 0;

  for(let i=0;i<nums.length;i++){
    xor = xor ^ nums[i];
  }
  return xor;
};
console.log(singleNumber(nums));