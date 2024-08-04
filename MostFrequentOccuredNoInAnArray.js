const arr = [3,1,5,5,7,2,7,5,9,8];


function MostFrequentNumber(arr){
    let obj={};
    let max = 0
    let mostfrequent = null;

    for(let i=0;i<arr.length;i++){
         let num = arr[i];

         if(obj[num] > 0){
             obj[num]++;
         }else{
             obj[num] = 1;
         }
    }

    for(let num in obj){
        if(obj[num] > max){
            max = obj[num];
            mostfrequent = num;
        }
    }
    return mostfrequent;

}
console.log(MostFrequentNumber(arr));