const arr = [0,1,3,5,6,7,7,9];

function missingnumbers(arr){
    let missingNumberArr = [];
    let arrSet = new Set(arr);
    console.log(arrSet);
    let max = -Infinity;
    
   for(let i=0;i<arr.length;i++){
       if(arr[i] > max){
           max = arr[i];
       }
   }
    
    for(let i=0;i<=max;i++){
        if(!arrSet.has(i)){
             missingNumberArr.push(i);
        }
    }

    // WIhout inbuilt method set 
    function missingNumbers(arr){
  let max = 0;
  let map = {};
  let result = [];

  for(let i=0;i<arr.length;i++){
      map[arr[i]]= i;
  }

  for(let i=0;i<arr.length;i++){
      if(arr[i] > max){
        max = arr[i];
      }
  }

  for(let i=1;i<=max;i++){
       if(map[i] === undefined){
          result.push(i);
       }
    
  }
  return result;
  
}
console.log(missingNumbers(arr));
    return missingNumberArr;
    
    
}
console.log(missingnumbers(arr));
