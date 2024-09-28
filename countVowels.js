// const inputString = "Hello World!";

// function countVowels(str){

//     str = str.toLowerCase();
//     const vowels = "aeiou";
//     let count  = 0;

//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;

// }
// console.log(countVowels(inputString));

const inputString = "Hello World!";

function countVowels(str){

    str = str.toLowerCase();
    const vowels = "aeiou";
    let count  = 0;

    for(let i=0;i<str.length;i++){
       for(let j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
            count++;
        }
       }
    }
    return count;

}
console.log(countVowels(inputString));