//  2824 LeetCode question

var countPairs = function(nums,target){
    let pairs = [];

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] < target){
                pairs.push([nums[i],nums[j]])
            }
        }
    }
    return pairs.length;
}
const nums = [-1,1,2,3,1]
const target = 2
const nums1 = [-6,2,5,-2,-7,-1,3];
const target1 = -2;
console.log(countPairs(nums,target));
console.log(countPairs(nums1,target1));