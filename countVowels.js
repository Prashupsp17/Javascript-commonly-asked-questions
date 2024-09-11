const inputString = "Hello World!";

function countVowels(str){

    str = str.toLowerCase();
    const vowels = "aeiou";
    let count  = 0;

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;

}
console.log(countVowels(inputString));