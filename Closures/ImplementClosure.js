// Implement a Closure function

function outer(){
  let a = 1;
  function inner(){
     console.log(a++);
  }
  return inner;
}
const counter = outer();
counter();
counter();
