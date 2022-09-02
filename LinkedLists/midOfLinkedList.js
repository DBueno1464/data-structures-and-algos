/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 https://leetcode.com/problems/middle-of-the-linked-list/

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
var middleNode = function (head) {
    let currentNode = head;
    let count = 0

    while (currentNode) {
        currentNode = currentNode.next;
        count++;
    }
    // find middle
    let mid;
    if (count % 2 == !0) {
        mid = Math.ceil(count * .5)
    } else {
        mid = count * .5 + 1
    }

    // use for loop to traverse through linkedlist and find the node in the middle
    console.log(mid)
    currentNode = head
    for (let i = 0; i < mid - 1; i++) {
        currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode;
};

let head1 = [1, 2, 3, 4, 5]; // answer is [3, 4, 5]; The middle node of the list is node 3.
let head1Node1 = new ListNode(1);
let head1Node2 = new ListNode(2);
let head1Node3 = new ListNode(3);
let head1Node4 = new ListNode(4);
let head1Node5 = new ListNode(5);

head1Node1.next = head1Node2;
head1Node2.next = head1Node3;
head1Node3.next = head1Node4;
head1Node4.next = head1Node5;

// console.log(head1Node1);

middleNode(head1Node1);

let head2 = [1, 2, 3, 4, 5, 6] // answer is [4,5,6]; Since the list has two middle nodes with values 3 and 4, we return the second one.

let head2Node1 = new ListNode(1);
let head2Node2 = new ListNode(2);
let head2Node3 = new ListNode(3);
let head2Node4 = new ListNode(4);
let head2Node5 = new ListNode(5);
let head2Node6 = new ListNode(6);


head2Node1.next = head2Node2;
head2Node2.next = head2Node3;
head2Node3.next = head2Node4;
head2Node4.next = head2Node5;
head2Node5.next = head2Node6;

// console.log(head2Node1);

// middleNode(head2Node1);