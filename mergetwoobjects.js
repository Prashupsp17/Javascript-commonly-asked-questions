const defaults = {color:'red',size:'medium'};
const userSettings = {color:"blue",brand:"new"};

const obj1 = Object.assign({},defaults,userSettings);
console.log(obj1);

const obj2 = {...defaults,...userSettings};
console.log(obj2);