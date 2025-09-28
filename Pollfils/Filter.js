// Filter pollfill

Array.prototype.myFilter = function(cb){
    let temp = [];

    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }

    return temp;
}

const arr = [1,2,3,4,5,6];
const result = arr.myFilter((item) => item > 2);
console.log(result);