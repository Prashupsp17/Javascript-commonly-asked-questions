// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { d: 2, e: 4, f: 5 };
// function hasCommonValues(obj1,obj2){
//     for(let value1 in obj1){
//     for(let value2 in obj2 ){
//         if(obj1[value1] === obj2[value2]){
//             return obj1[value1];
//         }
//     }
  
//   }
//       return false;
// }
// console.log(hasCommonValues(obj1,obj2));
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

function hasCommonKeys(obj1,obj2){
    let arr = [];
    for(let key1 in obj1 ){
        for(let key2 in obj2){
            if(key1=== key2){
                arr.push(key1);
            }
        }
    }
    return arr;
    
}
console.log(hasCommonKeys(obj1,obj2));