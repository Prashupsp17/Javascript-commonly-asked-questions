// function findUnion(arr1,arr2){
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);

//     const union  = new Set([...set1,...set2]);
//     return [...union];

// }

// 2nd Apprach Without Inbuilt methods

// function findUnion(arr1,arr2){
//     let unionArr = [];

//     for(let i=0;i<arr1.length;i++){
//         if(unionArr.indexOf(arr1[i]) === -1){
//             unionArr.push(arr1[i]);
//         }
//     }

//     for(let i=0;i<arr2.length;i++){
//         if(unionArr.indexOf(arr2[i]) === -1){
//             unionArr.push(arr2[i]);
//         }
//     }
//     return unionArr;
// }
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// console.log(findUnion(arr1,arr2));

function findUnion(arr1,arr2){
    let unionArr = [];

    for(let i=0;i<arr1.length;i++){
        if(!unionArr.includes(arr1[i])){
            unionArr.push(arr1[i]);
        }
    }

    for(let i=0;i<arr2.length;i++){
        if(!unionArr.includes(arr2[i])){
            unionArr.push(arr2[i]);
        }
    }
    return unionArr;
}
const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];
console.log(findUnion(arr1,arr2));