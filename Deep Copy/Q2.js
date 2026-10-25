const original = {
  name: "Alex",
  address: {
    city: "Pune"
  },
  skills: ["React", "Node.js"]
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Mumbai";
copy.skills.push("MongoDB");

console.log(original.address.city);
console.log(original.skills);
console.log(copy.address.city);
console.log(copy.skills);

OUTPUT

Pune
["React", "Node.js"]
Mumbai
["React", "Node.js", "MongoDB"]
