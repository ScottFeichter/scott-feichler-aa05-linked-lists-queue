// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length >= 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    this.length++;
    let newNode = new DoublyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.head.prev = null;
    this.tail.next = null;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    if (!this.head) {
      return undefined;
    } else if (!this.head.next) {
      let res = this.head.value;
      this.head = null;
      this.length--;
      return res;
    } else {
      let res = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return res;
    }

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    if (!this.head) {
        return undefined;
      } else if (!this.tail.prev) {
        let res = this.tail.value;
        this.tail = null;
        this.head = null;
        this.length--;
        return res;
      } else {
        let res = this.tail.value;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return res;
      }

    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    return !this.head ? undefined : this.head.value;

    // Your code here

    // Write your hypothesis on the time complexity of this method here
  }

  peekAtTail() {
    return !this.tail ? undefined : this.tail.value;
    // Return value of tail node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
