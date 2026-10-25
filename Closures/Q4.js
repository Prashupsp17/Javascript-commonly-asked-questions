function outer() {
  let a = 10;

  return function inner() {
    a += 5;
    return a;
  };
}

const result = outer();

console.log(result()); // 15
console.log(result()); // 20
console.log(result()); // 25
