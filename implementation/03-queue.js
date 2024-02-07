const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    this.length++;
    let newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.length;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
      this.tail = curr.next;
      return this.length;
    }

    // Write your hypothesis on the time complexity of this method here
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    this.length--;

    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      let res = this.head.value;
      this.head = null;
      this.tail = null;
      return res;
    } else {
      let res = this.head.value;
      this.head = this.head.next;
      return res;
    }
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
