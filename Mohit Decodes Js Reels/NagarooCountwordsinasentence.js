// Nagaroo Count words in a sentence

// function countWords(str) {
//     let arr = str.split(" ");
//     let count = 0;

//     for(let i=0;i<arr.length;i++){
//          count++;
//     }
//     return count;
    
// }
// console.log(countWords("I Love Javascript"));

function countWords(str) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== " " && inWord === false) {
            count++;
            inWord = true;
        }

        if (str[i] === " ") {
            inWord = false;
        }
    }

    return count;
}

console.log(countWords("I Love Javascript"));