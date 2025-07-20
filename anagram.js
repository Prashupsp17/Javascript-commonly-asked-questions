// // Anagram

// const s = "anagram";
// const t = "nagaram";

// const isAnagram = (s,t) => {
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");

//     return s===t;
// }
// console.log(isAnagram(s,t));

// 242. Valid Anagram

// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    let map = {};

    for(let i=0;i<s.length;i++){
         if(!map[s[i]]){
            map[s[i]] = 1;
         }else{
            map[s[i]]++;
         }
    }

    for(let i=0;i<t.length;i++){
        if(!map[t[i]] || map[t[i]] < 0){
            return false;
        }else{
            --map[t[i]];
        }
    }
    return true;
}
console.log(isAnagram("anagram","nagaram"))
