const a = {
  x: 10,
  y: {
    z: 20
  }
};

const b = { ...a };

b.x = 50;
b.y = { z: 100 };

console.log(a.x);
console.log(a.y.z);
console.log(b.y.z);


OUTPUT

10
20
100
