const defaults = {color:'red',size:'medium'};
const userSettings = {color:"blue",brand:"new"};

const obj1 = Object.assign({},defaults,userSettings);
// console.log(obj1);

const obj2 = {...defaults,...userSettings};
// console.log(obj2);

const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = { b: 2, c: 4, d: 5 };

// Output: { a: 1, b: 2, c: 4, d: 5 }

function output(obj3,obj4){

const result = { };

    for(let key in obj3){
        if(obj3.hasOwnProperty(key)){
            result[key] = obj3[key];
        }
    }

    for(let key in obj4){
        if(obj4.hasOwnProperty(key)){
            result[key] = obj4[key];
        }
    }
   return result;
    
}
console.log(output(obj3,obj4));