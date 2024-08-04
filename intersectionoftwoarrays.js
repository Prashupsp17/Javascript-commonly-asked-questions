// 349. Intersection of Two Arrays
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

const arr1= [1,2,2,3,4,4];
const arr2 = [2,2,4,5,5,6,2000];

function intersection(arr1,arr2){
    let intersectionArr = [];
    let obj = {}

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j] && !intersectionArr.includes(arr1[i]) ) {
                intersectionArr.push(arr1[i]);
            }
        }
    }
    return intersectionArr;
}
 console.log(intersection(arr1,arr2));

var intersection = function(nums1, nums2) {
    let intersectionArr = [];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i] === nums2[j]){
                  intersectionArr.push(nums1[i]);
            }
}
    }
    let newArr = new Set(intersectionArr);

    let myArr = [];
    for(let key of newArr){
        myArr.push(key);
    }
    return myArr;
    
};

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
console.log(intersection(nums1,nums2));

// 2nd Method

var intersectionArr = function(nums1,nums2){
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let intersection = [...set1].filter(x => set2.has(x));
    return intersection;
}
console.log(intersectionArr(nums1,nums2));