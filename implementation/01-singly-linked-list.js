// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        const newNode = new SinglyLinkedNode(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        this.length++
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            return this;

        }
        else{
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this;
    }




        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        let removed = this.head
        if(!this.head){
            return
        }
        // else if(!this.head.next){}
        else{
            this.head = this.head.next
        }
        this.length--
        return removed
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head){
            return
        }
        if(!this.head.next){
            let removed = this.head
            this.head = null
            this.length--
            return removed
        }
        let curr = this.head


        while(curr.next.next){
            curr = curr.next
        }
        let removed = curr.next
        curr.next = null
        this.length--
        return removed
    }

    peekAtHead() {
        // Return the value of head node
        if(this.head){
            return this.head.value
        }



        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        let curr = this.head
        if(!curr){return}
        else{
            while(curr){
                console.log(curr.value)
                curr = curr.next
            }
        }
    }

}


let linkedList = new SinglyLinkedList
linkedList.addToHead('A');
linkedList.addToTail('B');
linkedList.addToTail('C');
linkedList.print()
linkedList.removeFromTail()
linkedList.print()
linkedList.removeFromTail()
linkedList.print()
linkedList.removeFromTail()
linkedList.print()

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
