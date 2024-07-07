
// TWO SUM
const TwoSum = function(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
}
console.log(TwoSum([2,7,11,15],9));