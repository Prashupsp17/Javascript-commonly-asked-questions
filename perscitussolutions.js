//originial Questions
// let str = "my name is yash and my customerid is 1239";
// output = "ym eman si hsay dna ym diremotsuc si one two three nine"

const str = "my name is yash and my customerid is 1239";

function output (str) {
    
    
    const obj = {
        1:"one",
        2:"two",
        3:"three",
        9:"nine"
    }
    
    const arr = str.split(" ");
    const result = [];
    
    for(let i=0;i<arr.length;i++){
        let word = arr[i];
        
        let reversed="";
        let numWord = "";
        
        if(/\d/.test(word)){
            
            for(let j=0;j<word.length;j++){
                let char  = word[j];
                
                if(obj[char]){
                    numWord += obj[char] + " ";
                }
            }
            result.push(numWord.trim());
        
            
        }else{
            for(let j=word.length-1;j>=0;j--){
            let char = word[j];
                reversed += char;
            }
             result.push(reversed);
            
        }
        
        
       
       
    }
    return result.join(" ");
   
    
}

console.log(output(str));


// const str = "My name is prashant shinde 1239";

// function getOutput(str){

//     let obj = {
//         1:"one",
//         2:"two",
//         3:"three",
//         9:"nine"
//     }

//     let arr = str.split(" ");
//     let result = [];

//     for(let i=0;i<arr.length;i++){
//         let word= arr[i];
//         let reversed = " ";

//         for(let j=word.length-1;j>=0;j--){
//             let char = word[j];
//             if(obj[char]){
//                 reversed += `${obj[char]} `;
//             }else{
//                 reversed += char;
//             }
           
//         }
//         result.push(reversed);
//     }
//     return result.join(" ");

// }
// console.log(getOutput(str));



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