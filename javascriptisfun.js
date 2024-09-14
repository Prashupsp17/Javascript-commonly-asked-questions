const String= "JAVASCRIPT IS FUN";

// const output ="JaVaScRiPt Is FuN";

function output(String){
   let result = "";
   let flag = true;

   for(let i=0;i<String.length;i++){
    if(String[i] === " "){
        result += " ";
    }else if(flag === true){
        result += String[i].toUpperCase();
        flag = false;
    }else{
        result += String[i].toLowerCase();
        flag = true;
    }

   }
   return result;
}
console.log(output(String));

