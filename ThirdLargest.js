function thirdLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } else if (arr[i] > thirdLargest &&
                   arr[i] !== firstLargest &&
                   arr[i] !== secondLargest) {
            thirdLargest = arr[i];
        }
    }

    return thirdLargest === -Infinity ? -1 : thirdLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1];
console.log(thirdLargest(arr)); // 7
