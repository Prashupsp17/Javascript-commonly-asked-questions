function outer() {
  let a = 10;

  function inner() {
    a = a + 5;
    console.log(a);
  }
  
  inner();  // 15
  inner();  // 20
}

outer();
