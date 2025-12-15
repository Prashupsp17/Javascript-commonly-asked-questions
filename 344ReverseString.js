// 344. Reverse String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.
 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 3,548,688/4.4M
// Acceptance Rate
// 80.3%
// Topics
// icon
// Companies
// Hint 1
// Similar Questions
// Discussion (297)


var reverseString = function(s) {

    let len = s.length;
    let half = Math.floor(len/2);

    for(let i=0;i<half;i++){
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
    return s;
}


let s = ["h","e","l","l","o"];

console.log(reverseString(s));