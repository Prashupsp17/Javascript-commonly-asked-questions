const arr = [3,1,5,5,7,2,7,5,9,8];

function occurencesofletter(input){
    
    const obj = {};
    
    let result = "";
    
    let max = 0;
 let minOccured = Infinity;
    let mostFrequentOccured = null;
   let leastFrequentNum = null;
    
    for(let i=0;i<input.length;i++){
        let char = input[i];
        
       if(obj[char] > 0){
           obj[char]++;
       }else{
           obj[char] = 1;
       }
    }


for( let num in obj){
    if(obj[num] > max){
        max = obj[num];
        mostFrequentOccured = num;
    }
    
    if(obj[num] < minOccured){
        minOccured = obj[num];
        leastFrequentNum = num;
    }
}
    return [mostFrequentOccured,leastFrequentNum];
    
}
console.log(occurencesofletter(input));

// function MostFrequentNumber(arr){
//     let obj={};
//     let max = 0
//     let mostFrequentNum = null;
//     let leastFrequentNum = null;

//     for(let i=0;i<arr.length;i++){
//          let num = arr[i];

//          if(obj[num] > 0){
//              obj[num]++;
//          }else{
//              obj[num] = 1;
//          }
//     }

//     for(let num in obj){
//         if(obj[num] > max){
//             max = obj[num];
//             mostFrequentNum = num;
//         }

//         if (value < minOccured) {
//             minOccured = value;
//             leastFrequentNum = +key;
//         }
//     }
//     return [mostFrequentNum,leastFrequentNum];

// }
// console.log(MostFrequentNumber(arr));



// const input ="geeks for geeks";

// function countfrequency(input){
    
//     let obj = {};
    
//     for(let i=0;i<input.length;i++){
//         let char = input[i];
        
//         if(obj[char] > 0){
//             obj[char]++;
//         }else{
//             obj[char] = 1;
//         }
//     }
    
//     let result = "";
//     let max = 0;
//     let maxChar = "";
    
//     for(let [key,value] of Object.entries(obj)){
//         result += `No of occurence of ${key} : ${value} \n `;
        
//         if(value > max){
//             max = value
//             maxChar = key;
//         }
        
//     }
    
// return result + `${maxChar} occurred the most with ${max} occurrences.`;
    
// }
// console.log(countfrequency(input));