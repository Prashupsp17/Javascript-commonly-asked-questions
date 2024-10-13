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

const arr = [7,5,3,2,1,6];
const n = 2;

function rotateArrByK(arr,n){

    let result = [];

    for(let i=0;i<n;i++){
        result.unshift(arr.pop());
    }
    return result.concat(arr);

}
console.log(rotateArrByK(arr,n));