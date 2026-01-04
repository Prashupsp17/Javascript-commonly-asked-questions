// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 8,698,188/22.8M
// Acceptance Rate
// 38.1%

var lengthOfLongestSubstring = function(s) {

    let i = j = 0;

    let map = {};

    let maxWindoswSize = 0;

    for(let j=0;j<s.length;j++){
        if(map[s[j]] != undefined && map[[s[j]]] >= i){
            i = map[s[j]] + 1;
        }

        map[s[j]] = j;
        let currWindowSize = j - i + 1 ;
    maxWindoswSize = Math.max(maxWindoswSize,currWindowSize);
    }
    return maxWindoswSize;
}
console.log(lengthOfLongestSubstring("abcabcbb"));