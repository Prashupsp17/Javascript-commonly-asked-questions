const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

function output(users){
     let map = {};

     for(let i=0;i<users.length;i++){
        let item = users[i];

        map[item.name] = item;
       
     }
      console.log(map);

}
console.log(output(users));

Required Output 

{
  Alice: { name: 'Alice', age: 25 },
  Bob: { name: 'Bob', age: 30 },
  Charlie: { name: 'Charlie', age: 35 }
}
