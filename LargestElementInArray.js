const arr = [1, 2, 3, 4, 5, 6, 21, 33,4, 5, 22, 3, 2, 9, 6, 8,44,43];

function largest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if(max < arr[i]){
          max = arr[i];
      }
  }
  return max;
}
console.log(largest(arr));

function smallest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(max > arr[i]){
            max = arr[i];
        }
    }
    return max;
  }
  console.log(smallest(arr));
  
