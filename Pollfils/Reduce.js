// Reduce Polfill

// arr.reduce((acc,currentValue,i,arr) => {},initialValue);

Array.prototype.myReduce = function(cb,initialValue){

    var accumulator = initialValue;

    for(let i=0;i<this.length;i++){
         accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[0];
    }

    return accumulator;
   
}

const nums = [1,2,3,4]
const result = nums.myReduce((acc,curr,i,arr) => {
   return acc + curr
 } , 0);
console.log(result);