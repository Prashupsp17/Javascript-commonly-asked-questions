function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
const counter2 = outer();

counter1(); // 1
counter1(); // 2
counter2(); // 1
counter1(); // 3
counter2(); // 2
