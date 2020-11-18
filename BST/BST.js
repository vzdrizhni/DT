class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
            let hui = this.root
            while (true) {
                if (value < hui.value) {
                    if (!hui.left) {
                        hui.left = newNode
                        return this
                    }
                    hui = hui.left
                } else {
                    if (!hui.right) {
                        hui.right = newNode
                        return this
                    }
                    hui = hui.right
                }
            }
        }
    }
    lookup(value) {
        //Code here
    }
    // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
console.log(tree)