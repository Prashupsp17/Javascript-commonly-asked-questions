// Kth largest element in an array

const arr = [1,2,3,4,5];
const k = 4;

function kthLargestElement(arr,k){
  for(let i=0;i<arr.length;i++){
      for(j=i+1;j<arr.length;j++){
          if(arr[i] > arr[j]){
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }

  return arr[arr.length-k]
}
console.log(kthLargestElement(arr,k));