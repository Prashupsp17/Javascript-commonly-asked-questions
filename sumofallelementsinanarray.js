// Sum of All lements in an array

const arr = [1, 2, 3, 4, 5];

function Some(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(Some(arr));
