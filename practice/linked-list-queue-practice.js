// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    let curr = this.head;
    let counter = 0;
    while (curr) {
      counter++;
      curr = curr.next;
    }
    return counter;

    // Your code here
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes

    let curr = this.head;
    let sum = 0;
    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }
    return sum;

    // Write your hypothesis on the time complexity of this method here
  }

  averageValue() {
    // Returns the average value of all the nodes

    let curr = this.head;
    let sum = 0;
    let counter = 0;
    while (curr) {
      sum += curr.value;
      counter++;
      curr = curr.next;
    }
    return sum / counter;

    // Write your hypothesis on the time complexity of this method here
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head

    let curr = this.head;
    let counter = 0;
    while (counter < n) {
      counter++;
      curr = curr.next;
    }
    return curr;

    // Write your hypothesis on the time complexity of this method here
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?

    let length = this.listLength();
    let mid = length / 2;
    let n = Math.ceil(mid) - 1;

    return this.findNthNode(n);

    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Try implementing it by returning a new linked list then returning
    // the original linked list reversed in place
    // Does the time complexity change? How about space complexity?

    const reversed = new SinglyLinkedList();

    let curr = this.head;
    while (curr) {
      reversed.addToHead(curr);
      curr = curr.next;
    }
    return reversed;

    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
  print() {
    let current = this.head;
    while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
     }
    console.log("NULL"); // we indicate we are at end
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    let current = this.head;
    while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
     }
    console.log("NULL"); // we indicate we are at end
  }

}

const list = new SinglyLinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.print();

const reversed = list.reverse();
reversed.print();

    // let cur = reversed.head;
    // for (let i = 6; i >= 1; i--) {
    //   expect(cur.value).to.equal(i);
    //   cur = cur.next;
    // }

    // expect(cur).to.equal(null);



module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
