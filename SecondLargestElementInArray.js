const arr = [21, 33,4, 5, 22, 3, 2, 9, 6, 8,44,43,1, 2, 3, 4, 5, 6, ];

const secondLargest = (arr) =>{
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j]= temp;
        }
    }

  }
  return arr[arr.length-2];
}
console.log(secondLargest(arr));


