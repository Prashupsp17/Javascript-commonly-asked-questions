function countVowelsAndConsonants(str){
    
    let vowels = 0;
    let constants = 0;
    const vowelsList = "aeiouAEIOU";
    
    for(let i=0;i<str.length;i++){
        if(vowelsList.includes(str[i])){
            vowels++;
        }else if(/[a-zA-Z]/.test(str[i])){
        constants++;
        }
    }
    
    return {vowels,constants};
    
}
console.log(countVowelsAndConsonants("hello world")); 