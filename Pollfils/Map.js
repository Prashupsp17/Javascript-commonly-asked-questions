// Map Polyfill

Array.prototype.myMap = function(cb){
    let temp = [];

    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }

    return temp;
}

const arr = [1,2,3,4];

const result = arr.myMap((item,i) => item * 2);
console.log(result);