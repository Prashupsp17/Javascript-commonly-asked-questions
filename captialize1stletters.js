const inputSentence = 'hello world, this is a test';

function Captialize(inputSentence){
    let arr = inputSentence.split(" ");

    for(let i=0;i<arr.length;i++){
        let word = arr[i];
        arr[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return arr.join(" ");

}
console.log(Captialize(inputSentence));