function flattenArray(arr) {
    let result = [];

    function flatten(item) {
        if (typeof item === 'object' && item !== null) {
            for (let i = 0; i < item.length; i++) {
                flatten(item[i]);
            }
        } else {
            result.push(item);
        }
    }

    flatten(arr);
    return result;
}

// Example usage:
let nestedArray = [1, [2, [3, 4], 5], 6];
let flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]



// const deeplyNestedArray = [
//     1,
//     [2, 3],
//     [
//         4,
//         [5, 6, [7, 8]],
//         [9, [10, [11, [12]]]]
//     ],
//     [
//         [13],
//         [[14, 15], 16],
//         [17, [18, [19, [20]]]]
//     ]
// ];


// const result = deeplyNestedArray.flat(5);
// console.log(result);