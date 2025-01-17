// . Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]



const arr1 = [0,3,4,31];
const arr2 = [4,6,30];

function mergeandsort(arr1,arr2){
    
    const newArr = [...arr1,...arr2];
    const sortedArr = newArr.sort((a,b) => a-b);
    return sortedArr;
    
}
console.log(mergeandsort(arr1,arr2));