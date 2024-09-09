// 557 . Reverse words in a String

const input = "Lets take leetcode contest";
const output = "stes ekat edocteel testnoc";

function reverse(input){
    const x = input.split(" ");
    const str= [];

    for(let i=0;i<x.length;i++){
        let char = x[i];

        let reversedWord = "";

        for(let i=char.length-1;i>=0;i--){
            reversedWord += char[i];
        }
        str.push(reversedWord);
    }
    return str.join(" ");
}
console.log(reverse(input));

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

// Without In Built Method 

const str = "Lets take leetcode contest";
function sentenceReverse(str) {
    let result = '';
    let word = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word = str[i] + word;  // Prepend the character to reverse the word
        } else {
            result += word + ' ';  // Add the reversed word and a space to the result
            word = '';             // Reset the word
        }
    }

    // Add the last word to the result
    result += word;

    return result;
}

console.log(sentenceReverse(str));