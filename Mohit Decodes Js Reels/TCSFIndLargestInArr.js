// TCS FInd Largest In Arr

function findLargest(...arr) {

    let largest = arr[0][0];

    for(let i=0;i<arr.length;i++){
        for(let j =0 ;j<arr[i].length;j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
    }
    return largest;
}
console.log(findLargest([3,5,1],[7,2],[9,4]));