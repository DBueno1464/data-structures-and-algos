/*

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/


NOTE: COPY AND PASTE UNCOMMENTED CODE INTO LEETCODE CODE SPACE.
*/

//  Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)

//     return this, console.log(this);
// }

var getDecimalValue = function (head) {
    let currentNode = head;
    let binaryString = '';
    while(currentNode){
        binaryString = binaryString + currentNode.val;
        currentNode = currentNode.next;
    }
    
    return parseInt(binaryString, 2);
};

// let head1 = [1, 0, 1];  // answer is 5; (101) in base 2 = (5) in base 10
// let head2 = [0];        // answer is 0;

// getDecimalValue(head1);
// getDecimalValue(head2);