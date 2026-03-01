// 11. Container With Most Water
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104
 
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 4,883,063/8.3M
// Acceptance Rate
// 59.2%
// Topics
// icon
// Companies
// Hint 1
// Hint 2
// Hint 3
// Similar Questions
// Discussion (813)

var maxArea = function(arr) {
   let i=0;
   let j=arr.length-1;
   let maxWater = 0;

   while(i<j){
    let area = Math.min(arr[i],arr[j]) * (j-i);
    maxWater = Math.max(maxWater,area);

    if((arr[i] < arr[j])){
        i++;
    }else{
        j--;
    }
   }
   return maxWater;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));