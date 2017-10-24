import Node from './Node.js';

class DoublyLinkedList {
  constructor() {
    this._size = 0;
    this.head = null;
    this.tail = null;
  }

  const add = (nodeValue) => {
    const newNode = new Node(nodeValue);
    if (this._size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this._size++;

    return newNode;
  };

  const remove = (position) => {
    const currentNode = this.head;
    const length = this._size;

    // 1st use-case: invalid position
    if (length === 0 || position < 1 || position > length) {
       return false;
    }

    // 2nd use-case: first node is removed
    if (position === 1) {
       this.head = currentNode.next;

       // 2nd use-case: there is a second node
       if (!this.head) {
          this.head.prev = null;
       } else {
          // 2nd use-case: there is no second node
          this.tail = null;
       }

    } else if (position === this._size) {
      // 3rd use-case: the last node is removed
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // 4th use-case: a middle node is removed
      let count = 1;
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }

      const afterNodeToDelete = currentNode.next;
      const beforeNodeToDelete = currentNode.prev;
      let nodeToDelete = currentNode;

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.prev = beforeNodeToDelete;
      const deletedNode = nodeToDelete;
      delete deletedNode;
      nodeToDelete = null;
    }
    this._size--;

    return true;
  };
}

export default DoublyLinkedList;
