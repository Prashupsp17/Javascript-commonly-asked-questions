// without recursion

function factorialLoop(num){

    let result = 1;

    for(let i=2;i<=num;i++){
        result = result *i;
    }
    return result;
}
console.log(factorialLoop(5));