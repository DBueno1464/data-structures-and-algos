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
    }

    // insert last node
    addNode(value) {
        let node = new Node(value);
        let current;

        // if empty, make the head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert at index
    addNodeAt(value, index) {
        console.log(index > 0);
        console.log(index > this.size);
        // if index is out of range
        if (index < 0 || index > this.size) {
            console.log("Your index is either; less than 0 or larger than the size of the linked list. Try again bozo.");
            return;
        } else {
            console.log("Approved!");
        }
        // if first index
        if (index === 0) {
            this.addNodeHead(value);
            return;
        }
        const node = new Node(value);
        let current, previous;

        // set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; // node before index
            count++;
            current = current.next; // node after index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    // get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.value);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // remove at index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            console.log("Your index is either; less than 0 or larger than the size of the linked list. Try again bozo.");
            return;
        } else {
            console.log("Approved!");
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let linkedList = new LinkedList();

linkedList.addNodeHead(100);
linkedList.addNodeHead(200);
linkedList.clearList();
linkedList.printListData();
linkedList.addNode(300);
linkedList.addNodeHead(400);
// linkedList.addNodeAt(500, -30);

linkedList.removeAt(-33);
linkedList.printListData();