// 389. Find the Difference
// Solved
// Easy
// Topics
// Companies
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
 

// Constraints:

// 0 <= s.length <= 1000

var findTheDifference = function(s, t) {

    const set1 = new Set(s);
 let result ="";
 
    for(let i=0;i<t.length;i++){
        if(!set1.has(t[i])){
          result = t[i];
        }
        
    }
 return result;
 
};
findTheDifference(s,t);

var findTheDifference = function(s, t) {
 let sumS = 0;
 let sumT = 0;


 for (let char of s) {
     sumS += char.charCodeAt(0);
 }
 for (let char of t) {
     sumT += char.charCodeAt(0);
 }
 console.log(sumS);
  console.log(sumT);
 
 return String.fromCharCode(sumT - sumS);
};
console.log(findTheDifference(s,t));