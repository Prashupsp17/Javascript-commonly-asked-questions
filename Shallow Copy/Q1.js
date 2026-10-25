const original = {
  name: "Alice",
  details: {
    age: 25
  }
};

const copy = { ...original };

copy.name = "Bob";
copy.details.age = 30;

console.log(original.name);       
console.log(original.details.age);






OUTPUT
 Alice
30
