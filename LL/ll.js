class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode
        this.length++
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        console.log(currentNode);
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    traverseToIndex(index) {
        let i = 0;
        let currentNode = this.head;
        while (i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode
    }

    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        let lastNode = this.traverseToIndex(index - 1);
        let pointer = lastNode.next
        lastNode.next = newNode
        newNode.next = pointer
    }

    remove(index) {
        let lastNode = this.traverseToIndex(index - 1)
        let pointer = lastNode.next
        lastNode.next = pointer.next
    }
}

ll = new LinkedList(10)
ll.append(11)
ll.prepend(1)
ll.append(12)
// ll.append(13)
ll.insert(1, 8)
ll.remove(1)
// ll.printList();
console.log(ll);