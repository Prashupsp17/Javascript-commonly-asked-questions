const original = {
  users: [
    { name: "Alex" },
    { name: "Sam" }
  ]
};

const copy = structuredClone(original);

copy.users[0].name = "John";
copy.users.push({ name: "Priya" });

console.log(original.users.length);
console.log(original.users[0].name);
console.log(copy.users.length);
console.log(copy.users[0].name);

OUTPUT 

2
"Alex"
3
"John"
