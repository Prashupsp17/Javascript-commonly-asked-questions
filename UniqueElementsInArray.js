// // Q. Unique Elements in Array ?
// // data  = [1,1,2,2,3,3,4,4,5,5,6,6];
// // Without Inbuilt Functions

// const data  = [1,1,2,2,3,3,4,4,5,5,6,6];
// const Unique = (data) => {
//     let obj = {};
//     for(let i=0;i<data.length;i++){
//         let char = data[i];

//         if(obj[char] === undefined){
//             obj[char] = 1;
//         }
//     }
//     const newArr = [];
//     for(let key in obj){
//         newArr.push(+key);
//     }
//     return newArr;

// }

// console.log(Unique(data));

// const uniqueWithInbuiltFunctions = (data) => {
//     const arr = new Set([...data]);
//     console.log(arr);
    
//     const newArr = [];
//     for(let key of arr){
//         newArr.push(key);
//     }
//     return newArr;

// }
// console.log(uniqueWithInbuiltFunctions(data));

// const uniqueWithInbuilt = (data) => {
//     let arr = [];
//     let flag = false;

//     for(let i=0;i<data.length;i++){
//       let char = data[i];

//       if(arr[char] === undefined){
          
//         flag = true;
//           arr.push(char);
//       }
//     }
//     return arr;

// }
// console.log(uniqueWithInbuilt(data));

