// 912. Sort an Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.



// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.


// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 924,665/1.6M
// Acceptance Rate
// 56.6%
// Topics
// icon
// Companies
// Discussion (346)

const nums = [5, 2, 3, 1];

var sortArray = function (nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)]
}
console.log(sortArray(nums));