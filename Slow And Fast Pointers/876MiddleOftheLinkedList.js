// 876. Middle of the Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100
 

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 2,806,222/3.5M
// Acceptance Rate
// 81.3%
// Topics
// icon
// Companies
// Similar Questions
// Discussion (246)
const head = [1,2,3,4,5]
// Output: [3,4,5]
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

console.log(middleNode(head));