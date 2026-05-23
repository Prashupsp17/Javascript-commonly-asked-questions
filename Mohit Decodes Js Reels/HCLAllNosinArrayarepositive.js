// HCL All Nos in Array are positive
const arr = [1, 2, 3, -1, 5];

function areAllPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }


    return true;
}
console.log(areAllPositive(arr));