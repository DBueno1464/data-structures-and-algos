/*

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

var getDecimalValue = function (head) {
    let linkedList = {
        head: null,
    }

    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }

    let node1 = new Node(100, linkedList.head);
    let node2 = new Node(200, linkedList.head);
    
    linkedList.head = node1;
    console.log(linkedList);
    linkedList.head = node2;
    console.log(linkedList);

};

let head1 = [1, 0, 1];  // answer is 5; (101) in base 2 = (5) in base 10
let head2 = [0];        // answer is 0;

getDecimalValue(head1);
// getDecimalValue(head2);