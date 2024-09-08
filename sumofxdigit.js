const x = 13927;


function sum(x){

    let result = 0;
   while(x>0){
      let digit = x%10;
      result += digit;
      x = Math.floor(x/10);
   }
   return result;
}
console.log(sum(x));