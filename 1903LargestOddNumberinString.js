// 1903. Largest Odd Number in String

// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
 

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.

var largestOddNumber = function(s) {

    n = s.length-1;

    while(n >= 0){
        if(Number(s[n] % 2 == 1)){
            return s.substring(0,n+1);
        }
        --n;
    }
    return "";

}

console.log(largestOddNumber("520146"));