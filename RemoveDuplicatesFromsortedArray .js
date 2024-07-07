// Remove Duplicates From sorted Array 

const data  = [1,1,2,2,3,3,4,4,5,5,6,6];

function removeDuplicates (data){
let uniqueIndex = 0;

for(let i=0;i<data.length;i++){
    if(data[i] !== data[uniqueIndex]){
        uniqueIndex++;
        data[uniqueIndex] = data[i];
    }
}
return uniqueIndex+1;
}
console.log(removeDuplicates(data));
