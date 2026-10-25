const original = {
  value: 1,
  nested: {
    count: 5
  }
};

const copy = { ...original };

copy.nested.count = 10;
copy.value = 99;

console.log(original.value); 1 
console.log(original.nested.count); 10 
console.log(copy.nested.count); 10

OUTPUT



console.log(original.value); 1 
console.log(original.nested.count); 10 
console.log(copy.nested.count); 10
