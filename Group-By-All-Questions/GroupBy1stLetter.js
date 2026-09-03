//  6. Object Grouping
// Group names based on the first letter.
// const arr = ["Chowthanya", "charlie", "Victor", "Vikas", "Dheepan", "Kannya", "kavya"];
// Expected Output:
// {
//   C: ["Chowthanya", "charlie"],
//   V: ["Victor", "Vikas"],
//   D: ["Dheepan"]
//   K: ["Kannya", "kavya"]
// }

const arr = ["Chowthanya", "charlie", "Victor", "Vikas", "Dheepan", "Kannya", "kavya"];


function groupBy1stLetter(arr){

    let map = {};

    for(let i=0;i<arr.length;i++){
        let item = arr[i];
        let firstLetter = item[0].toUpperCase();

        if(!map[firstLetter]){
            map[firstLetter] = []
        }
        map[firstLetter].push(item);
    }
    return map;
}
console.log(groupBy1stLetter(arr));
