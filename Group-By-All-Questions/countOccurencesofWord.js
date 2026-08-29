const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

function countOccurencesofWord(words){

    let map = {};
    for(let i=0;i<words.length;i++){
        let sortedStr = words[i].split("").sort().join("");

       
        if(map[words[i]] > 0){
              map[words[i]]++;
        }else{
              map[words[i]] = 1;
        }
    }
    // return [...Object.values(map)];
    return map;

}
console.log(countOccurencesofWord(words));
