/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

https://leetcode.com/problems/reverse-linked-list/

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    let currentNode = head;
    let array = [];

    let nextNode = currentNode.next
    currentNode.next = null;

    let node1 = currentNode;

    currentNode = head.next;
    console.log(JSON.stringify(currentNode, null, 2))
    console.log(JSON.stringify(nextNode, null, 2))
    console.log(node1);

};

// Example 1
let head1 = [1, 2, 3, 4, 5] // answer is [5,4,3,2,1]

let head1Node1 = new ListNode(1);
let head1Node2 = new ListNode(2);
let head1Node3 = new ListNode(3);
let head1Node4 = new ListNode(4);
let head1Node5 = new ListNode(5);

head1Node1.next = head1Node2;
head1Node2.next = head1Node3;
head1Node3.next = head1Node4;
head1Node4.next = head1Node5;

reverseList(head1Node1)

// Example 2
let head2 = [1, 2]       // answer is [2,1]

let head2Node1 = new ListNode(1);
let head2Node2 = new ListNode(2);

head2Node1.next = head2Node2;

// reverseList(head2Node1)

// Example 3
let head3 = []          // answer is []

// reverseList(head3)