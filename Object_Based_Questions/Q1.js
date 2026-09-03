
const array = [
  { name: "ram", age: 16 },
  { name: "shyam", age: 22 }
];

let map = [];

for(let i=0;i<array.length;i++){
    let item = array[i];

     map.push({
        userName:item.name,
        userAge:item.age
     })
}
console.log(map);
