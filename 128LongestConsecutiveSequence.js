// 128. Longest Consecutive Sequence
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 2,936,848/6.3M
// Acceptance Rate
// 47.0%
// Topics

var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    nums.sort((a,b) => a-b);

    let count = 1;
    let longest = 1;

    for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            continue;
        }

        if(nums[i] === nums[i-1]+1){
            count++;
        }else{
            longest = Math.max(longest,count);
            count = 1;
        }
    }
    return Math.max(longest,count);
}
console.log(longestConsecutive([100,4,200,1,3,2]));