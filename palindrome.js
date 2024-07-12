// Palindrome Number and String

const x = 121;

function palindrome(x){
  let original = x;
  let reversed = 0;

  while(x>0){
      let digit = x%10;
      reversed = reversed * 10 +digit;
      x = Math.floor(x/10);
  }
  return original === reversed;
}
console.log(palindrome(x));

const str = "racecar";

function PalindromeString(str){
let left = 0;
let right= str.length-1;

while(left < right){
    if(str[left] !==        str[right]){
        return false;
    }else{
        left++;
        right--;
    }
}
return true;
}
console.log(PalindromeString(str));