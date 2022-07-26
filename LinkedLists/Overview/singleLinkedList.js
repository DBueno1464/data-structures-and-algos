class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    addNodeHead(value) {
        this.head = new Node(value, this.head);
        this.size++;
        console.log(`Node added at head.`);
    }

    // insert last node
    addNodeLast(value) {
        let node = new Node(value);
        let current;

        // if linkedList is empty, add the head
        if (!this.head) {
            this.head = node;
            console.log(`Node added at head.`);
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
        console.log(`Node added at end with index of, ${this.size}.`);
    }

    // insert at index
    addNodeAt(value, index) {
        // if index is out of range
        if (index > 0 && index > this.size) {
            console.log(`Index of, ${index}, is out of range. Try inputting an index between 0 and ${this.size}, inclusive.`);
            return;
        }

        // if index is 0, add at head
        if (index === 0) {
            this.head = new Node(value, this.head);
            this.size++;
            console.log(`Node added at head.`)
            return;
        }

        const node = new Node(value);
        let current, previous;

        // set current to first
        current = this.head
        let count = 0

        // we do this to fine the nodes before and after the index
        while (count < index) {
            previous = current; //node before the index we want to insert
            count++;
            current = current.next; // node after the index
        }
        // we make the next property of the node we want to insert the current node(the node after the index passed)
        node.next = current;
        // and we make the next property of the previous node(node before the index) equal to the node. This is like attaching a chain link in the middle.
        previous.next = node;

        this.size++;
        console.log(`Node added at desired index: ${index}.`)
    }

    // get at index
    getAt(index) {
    }

    // remove at index
    removeAt(index) {
    }
    // clear list
    clearList() {
    }
    // print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}

let linkedList = new LinkedList();

linkedList.addNodeHead(100);
linkedList.addNodeHead(200);
linkedList.addNodeHead(300);
linkedList.addNodeLast(400);
linkedList.addNodeAt(500, 10);
linkedList.printListData();

/*
NODE
{
    value: 100,
    next: null
}
LINKED LIST
{
    head: null
}

insert a node to linked list
{
    head: {
        value:100,
        next: null
    }
}

then add another node of value 200 AT HEAD(replace head)
{
    head: {
        value:200,
        next: {
            value: 100,
            next: null
        }
    }
}

add another to head, of value 300
{
    head: {
        value:300,
        next: {
            value: 200,
            next: {
                value:100,
                next: null
            }
        }
    }
}

*/