/*

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

*/

//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var getDecimalValue = function (head) {
    let currentNode = head;
    let binaryString = '';
    while (currentNode) {
        binaryString = binaryString + currentNode.val;
        currentNode = currentNode.next;
    }

    return parseInt(binaryString, 2), console.log(parseInt(binaryString, 2));
};

let head1 = [1, 0, 1];  // answer is 5; (101) in base 2 = (5) in base 10

let head1Node1 = new ListNode(1);
let head1Node2 = new ListNode(0);
let head1Node3 = new ListNode(1);

head1Node1.next = head1Node2;
head1Node2.next = head1Node3;

// getDecimalValue(head1Node1);

let head2 = [0];        // answer is 0;

let head2Node1 = new ListNode(0);

getDecimalValue(head2Node1);