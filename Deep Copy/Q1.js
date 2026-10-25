const original = {
  name: "Alex",
  address: { city: "Pune" }
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Mumbai";
copy.name = "John";

console.log(original.name);
console.log(original.address.city);
console.log(copy.name);
console.log(copy.address.city);


OUTPUT

Alex
Pune
John
Mumbai
