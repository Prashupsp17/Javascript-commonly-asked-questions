// 557 . Reverse words in a String

const input = "Lets take leetcode contest";
const output = "stes ekat edocteel testnoc";

var reverseWords = function(s) {
    const str = [];
    const words = s.split(" ");
    
    for(let word of words){
        let char = word;
        let reversedWord = "";
        for(let i = word.length-1 ;i>=0; i--){
            reversedWord += word[i];
        }
        str.push(reversedWord);
    }
    return str.join(' ');
};
const s = "Let's take LeetCode contest"
console.log(reverseWords(s));