// 1st way 
function findDuplicates(arr){
   let map = {};
   let duplicates = [];

   for(let i=0;i<arr.length;i++){
      let item = arr[i];

      if(map[[item]]){
           duplicates.push(item);
      }else{
        map[item] = true;
      }
   }

  return duplicates;
}

// 2nd Way

const data = [10,20,30,40,10,20];

function duplicates(data){
    
    let duplicates = [];
    
    let obj = {};
    
    for(let i=0;i<data.length;i++){
        let num = data[i];
        if(obj[num] > 0){
            obj[num]++;
        }else{
            obj[num] = 1;
        }
    }
   
    
    for(let [key,value] of Object.entries(obj)){
        if(value > 1){
            duplicates.push(+key);
        }
    }
    return duplicates;
    
}
console.log(duplicates(data));
