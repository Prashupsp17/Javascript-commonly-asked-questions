function myMemoize(fn,context){
    const res = {};
    return function (...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

const clumsySquare = (num1,num2) => {
    for(let i=0;i <= 10000000;i++){
        return num1 * num2;
    }
}
const memoizedClumzyProduct = myMemoize(clumsySquare);

console.time("First Call");
console.log(memoizedClumzyProduct(9647,7649));
console.timeEnd("First Call");

console.time("Second call");
console.log(memoizedClumzyProduct(9647,7649));
console.timeEnd("Second call");
