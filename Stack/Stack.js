class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }

  push(value){
    const node = new Node(value)
    if (this.length === 0) {
        this.top = node
        this.bottom = node
    } else {
        const newVal = this.top;
        this.top = node;
        this.top.next = newVal
    }
    this.length++;
    return this;
  }

  pop(){
    const newVal = this.top.next
    this.top = newVal
    this.length--
    return this
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(9)
myStack.push(10)
myStack.push('hui')
myStack.pop()
console.log(myStack)