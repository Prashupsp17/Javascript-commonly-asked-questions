const original = {
  profile: {
    age: 25
  }
};

const copy = structuredClone(original);

copy.profile = { age: 30 };
original.profile.age = 40;

console.log(copy.profile.age);
console.log(original.profile.age);

OUTPUT 

30 
40
