// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

const strs = ["flower","flow","flight"];

function longestCommonPrefix(strs){
     
    for(let i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[0][i] !== strs[j][i]){
             
                return strs[0].slice(0,i);
            }else{
                return " ";
            }
        }

    }
    return strs[0];
}
console.log(longestCommonPrefix(strs));