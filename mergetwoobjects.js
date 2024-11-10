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
// console.log(output(obj3,obj4));

// const input = [
//     { id: 1, name: 'A' },
//     { id: 2, name: 'B' }
// ]; 
// let result = {};

// for(let i=0;i<input.length;i++){
//     result[input[i].id] = {name: input[i].name}
// }

// const arr = ["apple", "banana", "cherry"];

// let obj = {};

// for(let i=0;i<arr.length;i++){
//     obj[arr[i]] = i;
// }
// console.log(obj);

// 4. Array Mapping: Write a function to take an array of numbers and return an array of squared values.

const arr = [1,2,3,4,5];

function squares(arr){

    let result = [];
    for(let i=0;i<arr.length;i++){
           result.push(arr[i]*arr[i]);
    }
    return result;
    
}
console.log(squares(arr));
