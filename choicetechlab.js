const arr = [
  {
    name: "Tejashri",
    age: 24,
  },
  {
    name: "Prashant",
    age: 23,
  },
  {
    name: "Tejas",
    age: 26,
  },

  {
    name: "Prerna",
    age: 25,
  },
];

const add = arr.map((item, index) => {
  if (item.age < 24) {
    item.mobile = "9021";
  }
  return item;
});

console.log(arr);

const filter = arr.filter((item, index) => item.age > 23);
console.log(filter);

const sorted = arr.sort((a, b) => a.age - b.age);
console.log(sorted);

const adult = arr.map((item,index) => {
    return {
        ...item,
        isAdult:item.age >23
    }
})
console.log(adult);

const found  = arr.find(item => item.name === "Prerna");
console.log(found);

// Find Occurences in a string and display like this ?

const input = "geeks for geeks";

// No of Occurences of g is : 2

function countOccurences(input){

    let obj = {};

    for(let i=0;i<input.length;i++){
        let char = input[i];

        if(obj[char] > 0){
            obj[char]++;
        }else{
            obj[char] = 1;
        }


    }

    

let result = "";

for (let [key, value] of Object.entries(obj)) {
    result += `No of Occurrences of '${key}' is : ${value}\n`;
}

return result;

// let arr = [];

// for(let [key,value] of Object.entries(obj)){
//     arr.push(`No of Occurences of ${key} is : ${value}`);
// }
// return arr;

}
console.log(countOccurences(input));