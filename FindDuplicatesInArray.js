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
