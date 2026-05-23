// Array fill reference trap

const arr = new Array(3).fill([]);
arr[0].push(1);
console.log(arr); // [[1], [1], [1]]

// Array.fill copies the reference of the same array to all the elements, so when we push to one of the elements, it affects all the elements as they are referencing the same array. To avoid this, we can use Array.from or map to create a new array for each element.