const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};

const obj = {};

for(let [key,value] of Object.entries(obj1)){
    obj[key] = value;
}

for(let [key,value] of Object.entries(obj2)){
    obj[key] = value;
}
obj.sayHello = function(){
    console.log("Hi There");
}
obj.sayHello();
console.log(obj);