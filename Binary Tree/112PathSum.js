// 112. Path Sum
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000
 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 2,127,098/3.9M
// Acceptance Rate
// 54.7%

//  Top Down Approach

var hasPathSum = function (root, targetSum) {
    if(!root) return false;
    let ans = false;

    function traverse(curr,currSum){
     let newSum = currSum + curr.val;
     if(!curr.left && !curr.right){
        if(newSum === targetSum){
            ans = ans || true;
        }
     }
     curr.left && traverse(curr.left,newSum);
     curr.right && traverse(curr.right,newSum);
    }
    traverse(root,0);
    return true;
    
}

// Bottom up

 var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    if(!root.left && !root.right){
        return root.val === targetSum;
    }

    let leftSubTreePathSum = hasPathSum(root.left,targetSum - root.val);
    let rightSubTreePathSum = hasPathSum(root.right,targetSum - root.val);

    return leftSubTreePathSum || rightSubTreePathSum;
 }