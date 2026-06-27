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
    return missingNumberArr;
    
    
}
console.log(missingnumbers(arr));
