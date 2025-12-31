// 345. Reverse Vowels of a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"



// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 1,479,540/2.5M
// Acceptance Rate
// 60.1%
// Topics
// icon
// Companies
// Similar Questions
// Discussion (230)

var reverseVowels = function (s) {

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split("");

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!vowels.has(s[i])) {
            i++;
        } else if (!vowels.has(s[j])) {
            j--;
        } else {
            // both are vowels then swap
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }

    }

    return s.join("");
}
console.log(reverseVowels("IceCreAm"));