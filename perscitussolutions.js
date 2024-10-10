const str = "My name is prashant shinde 1239";

function getOutput(str){

    let obj = {
        1:"one",
        2:"two",
        3:"three",
        9:"nine"
    }

    let arr = str.split(" ");
    let result = [];

    for(let i=0;i<arr.length;i++){
        let word= arr[i];
        let reversed = " ";

        for(let j=word.length-1;j>=0;j--){
            let char = word[j];
            if(obj[char]){
                reversed += `${obj[char]} `;
            }else{
                reversed += char;
            }
           
        }
        result.push(reversed);
    }
    return result.join(" ");

}
console.log(getOutput(str));