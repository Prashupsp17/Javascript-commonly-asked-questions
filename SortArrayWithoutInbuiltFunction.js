// Q: Sort Array Without Using In Built Function ?
// data = [-34,-543,-53,-34,123,54,542];

function sortArr(data){
  for(let i=0;i<data.length;i++){
      for(let j=i+1;j<data.length;j++){
          if(data[i] > data[j]){
              let temp = data[i];
              data[i] = data[j];
              data[j] = temp;
          }
      }
  }
  return data;
}
const data = [-34,-543,-53,-34,123,54,542];
console.log(sortArr(data));

// With Using Inbuilt Function

function sortUsingInBuilt(data){
     const newArr = data.sort((a,b) => a-b);
     return newArr;
}
console.log(sortUsingInBuilt(data));