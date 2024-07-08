// missing element in array

function missingelementinArray(arr,n){

    for(let i=1;i<=n;i++){
        let found = false;

        for(let j=0;j<arr.length;j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        if(!found){
            return i;
        }
    }
    return -1;

}
const arr=[1,2,3,5,6];
const n = 5;

console.log(missingelementinArray(arr,n));
