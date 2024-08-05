const nestedArray = [1,[2,3,4,[5,6],[7,[8,[9]]]]];

function flattenArray(input){
    let flattenedArr = [];

    for(let i=0;i<input.length;i++){
        if(Array.isArray(input[i])){
            flattenedArr = flattenedArr.concat(flattenArray(input[i]));
        }else{ 
            flattenedArr.push(input[i]);
        }
    }
    return flattenedArr;

}
console.log(flattenArray(nestedArray));