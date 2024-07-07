// Q. 𝐖𝐫𝐢𝐭𝐞 𝐚 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭 𝐩𝐫𝐨𝐠𝐫𝐚𝐦 𝐭𝐨 𝐦𝐨𝐯𝐞 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐳𝐞𝐫𝐨𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐞𝐧𝐝.

const arr = [1, 0, 2, 3, 0, 0, 4, 5, 0, 0, 6, 0, 7, 0, 8, 8, 9];

function moveAllZeroes(){
  let element = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] !== 0){
      let temp = arr[element];
      arr[element] = arr[i];
      arr[i] = temp;
      element++;
    }
  }
  return arr;
}
console.log(moveAllZeroes(arr));