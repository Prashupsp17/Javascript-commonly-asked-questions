// Longest Word In a given string

const str = "My Name is Prashant Shinde";
function LongestWord(str){

    let arr = str.split(" ");
    let max = 0;
    let longestWord = "";

    for(let i=0;i<arr.length;i++){
        let char = arr[i];

        if(char.length > longestWord.length){
            longestWord = char;
        }
    }
    return longestWord;
}
console.log(LongestWord(str));

