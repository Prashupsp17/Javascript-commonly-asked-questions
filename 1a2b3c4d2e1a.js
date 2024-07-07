// Write a javascript program to get below output from given input ?
// I/P: abbcccddddeea
// O/P: 1a2b3c4d2e1a

function getOutput(input) {
  let result = "";
  let count = 1; // as there will be 1 occurence always if we dont put 1st occurence will be 0 then.

  for(let i=0;i<input.length;i++){
      if(input[i] === input[i+1]){
          count++;
      }else{
          result += count+input[i];
          count = 1;
      }
  }
  return result;
}

const input = "abbcccddddeea";
console.log(getOutput(input));
