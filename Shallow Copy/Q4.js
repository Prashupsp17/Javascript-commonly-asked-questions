const original = {
  a: 10,
  b: { c: 20 }
};

const copy = Object.assign({}, original);

copy.a = 50;
copy.b.c = 100;

console.log(original.a);
console.log(original.b.c);
console.log(copy.a);
console.log(copy.b.c);

OUTPUT

10
100
50
100
