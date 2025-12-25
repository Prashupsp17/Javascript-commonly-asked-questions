// null => 1 => 2 => 3 => 4 => 5 => null

// 206. Reverse Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 5,899,222/7.4M
// Acceptance Rate
// 80.0%

var reverseList = function(head) {

    let prev = null;
    let head = curr;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

console.log(reverseList(head));