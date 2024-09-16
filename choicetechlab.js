// const arr = [
//   {
//     name: "Tejashri",
//     age: 24,
//   },
//   {
//     name: "Prashant",
//     age: 23,
//   },
//   {
//     name: "Tejas",
//     age: 26,
//   },

//   {
//     name: "Prerna",
//     age: 25,
//   },
// ];

// const add = arr.map((item, index) => {
//   if (item.age < 24) {
//     item.mobile = "9021";
//   }
//   return item;
// });

// console.log(arr);

// const filter = arr.filter((item, index) => item.age > 23);
// console.log(filter);

// const sorted = arr.sort((a, b) => a.age - b.age);
// console.log(sorted);

// const adult = arr.map((item,index) => {
//     return {
//         ...item,
//         isAdult:item.age >23
//     }
// })
// console.log(adult);
// let total = 0;
// const totalAge = arr.map(item => {
//   if(item.age){
//  total += item.age;
//   }
// })
// console.log(total);

// const found  = arr.find(item => item.name === "Prerna");
// // console.log(found);

// // Find Occurences in a string and display like this ?

// const input ="geeks for geeks";

// // No of Occurences of g is : 2

// function countOccurences(input){

//     let obj = {};

//     for(let i=0;i<input.length;i++){
//         let char = input[i];

//         if(obj[char] > 0){
//             obj[char]++;
//         }else{
//             obj[char] = 1;
//         }


//     }

    

// let result = "";

// for (let [key, value] of Object.entries(obj)) {
//     result += `No of Occurrences of '${key}' is : ${value}\n`;
// }

// return result;

// // let arr = [];

// // for(let [key,value] of Object.entries(obj)){
// //     arr.push(`No of Occurences of ${key} is : ${value}`);
// // }
// // return arr;

// }
// console.log(countOccurences(input));

const records = [
  { color: "red", name: "Roger", exp: 12 },
  { color: "blue", name: "Anna", exp: 8 },
  { color: "green", name: "Tom", exp: 5 },
  { color: "yellow", name: "Sara", exp: 15 },
  { color: "purple", name: "Liam", exp: 10 },
  { color: "yellow", name: "Emma", exp: 7 },
  { color: "pink", name: "John", exp: 3 },
  { color: "brown", name: "Olivia", exp: 20 },
  { color: "black", name: "Mia", exp: 6 },
  { color: "white", name: "Ethan", exp: 11 }
];


// Filter according to names

function filterNames(){
  let arr = records.sort((a,b) => a.name.localeCompare(b.name));
  return arr;
}
// console.log(filterNames());

function sortByYellow(){

  let arr = records.filter((item,i) => item.color === "yellow");
  return arr;

}
console.log(sortByYellow());