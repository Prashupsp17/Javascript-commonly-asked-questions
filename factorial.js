// without recursion

function factorialLoop(num){

    let result = 1;

    for(let i=2;i<=num;i++){
        result = result *i;
    }
    return result;
}
console.log(factorialLoop(5));

// With Recursion

function factorialRecursive(num){
    if(num == 0 || num ==1){
        return 1;
    }else{
        return num * factorialRecursive(num-1);
    }
}
console.log(factorialRecursive(5));