const str = "abcdefgh";

function getLastFour(str){
    
    let result = "";
    
    for(let i=str.length-4;i<str.length;i++){
        result += str[i];
    }
    return result;
}
console.log(getLastFour(str));
