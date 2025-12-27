// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
    let slow = fast = head;

    while(fast && fast.next){
        slow =slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr =slow;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }


    let firstList = head;
    let secondList =  prev;

    while(secondList){
        if(firstList.val != secondList.val){
            return false;
        }
        firstList = firstList.next;;
        secondList = secondList.next;
    }

    return true;
}