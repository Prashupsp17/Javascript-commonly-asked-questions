// 1 : 8 Array Methods
// 1: ForEach, Map, Slice, Splice,push,pop, shift,unshift,filter,reduce

// 2: difference between shift and pop
// 3: slice and splice
// 4: shallow Copy and Deep copy
// 5: How to manipulate DOM ?
// 6: Redux 
// 7 :  Tell about modules you worked on ?
// 8: Event loop?
// 9: Output Based questions on promises and setTimeout and setInterval ?

// 10: How u will get to know about resolution ?

// 11 : Write a program to find unique and reverse the array using inbuilt and without inbuilt?

//  const arr = [1,1,2,2,3,3,4,4,5,5];

const arr = [5,1,2,5,3,4,2,1,4,3,];


function uniqueElement(arr){
    
    let obj = {};
    
    let result = [];
    
    for(let i=0;i<arr.length;i++){
        let item = arr[i];
        
        if(obj[item] === undefined){
            obj[item] = true;
            result.push(item);
        }
        
    }
    return result;
}
console.log(uniqueElement(arr));

// const newArr = new Set(arr);
// console.log(newArr);
// const uniqueArr = [...newArr];
// console.log(uniqueArr);
// const reversedArr = uniqueArr.reverse();
// console.log(reversedArr);


// const arr = [1,1,2,2,3,4,5,6];

// function output(arr){
    
//     let obj = {};
//     let result = [];
    
//     for(let i=0;i<arr.length;i++){
//         let num = arr[i];
        
//         if(obj[num] > 0){
//             obj[num]++;
//         }else{
//             obj[num] = 1;
//         }
//     }
    
    
//     for(let [key,value] of Object.entries(obj)){
//         if(value === 1){
//             result.push(+key);
//         }
//     }
    
//     let reversedArr = [];
    
//     for(let i=result.length-1;i>=0;i--){
//         reversedArr.push(result[i]);
//     }
//     return reversedArr;
    
// }
// console.log(output(arr));
