class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        let node = new Node(value);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            let oldTail = this.tail;
            this.tail = node;
            oldTail.next = this.tail;
            this.tail.previous = oldTail;
        }
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

let ll = new LinkedList();

ll.addNode(100);

console.log(ll);