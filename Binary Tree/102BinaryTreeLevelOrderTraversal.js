// 102. Binary Tree Level Order Traversal
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000
 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 3,379,287/4.7M
// Acceptance Rate
// 72.5%
// Topics


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function(root) {
//     if(!root ) return [];
//     let q = [root];
//     let ans = [];

//     while(q.length){
//         let levelArr = [];
//         let levelSize = q.length;

//         for(let i=0;i<levelSize;i++){
//             let curr = q.shift();
//             curr.left && q.push(curr.left);
//             curr.right && q.push(curr.right);
//             levelArr.push(curr.val);
//         }
//         ans.push(levelArr);
//     }
//     return ans;
    
// };

// Using DFS Recursion

var levelOrder = function(root) {
    if(!root) return [];
    let ans = [];

    function traversal(curr,level){
        if(!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level+1);
        curr.right && traversal(curr.right,level+1);

    }
    traversal(root,0);
    return ans;
}
console.log(levelOrder([3,9,20,null,null,15,7]));