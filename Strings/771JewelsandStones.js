// 771. Jewels and Stones
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.
 
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 1,320,460/1.5M
// Acceptance Rate
// 89.4%


// Approach 1 BRUTE FORCE
var numJewelsInStones = function(jewels, stones) {

    let count = 0;

    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i] === jewels[j]){
                ++count;
                break;
            }
        }
    }
    return count;

}
console.log(numJewelsInStones("aA", "aAAbbbb"));

var numJewelsInStonesUsingSet = function(jewels, stones) {
     const jSet = new Set();

    let count = 0;

    for(let i=0;i<jewels.length;i++){
         jSet.add(jewels[i]);
    }

    for(let i=0;i<stones.length;i++){
        if(jSet.has(stones[i])){
          count++;
        }
    }
    
  return count;
}
console.log(numJewelsInStonesUsingSet("aA", "aAAbbbb"));