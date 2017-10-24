import Node from './Node.js';

class DoublyLinkedList {
  constructor() {
    this._size = 0;
    this.head = null;
    this.tail = null;
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.searchNodeByValue = this.searchNodeByValue.bind(this);
    this.repositionToRecent = this.repositionToRecent.bind(this);
    this.removeLeastRecent = this.removeLeastRecent.bind(this);
    this.print = this.print.bind(this);
  };

  // adds a node to DoublyLinkedList, at tail
  add(nodeValue) {
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

  // removes the node from DoublyLinkedList from given position
  remove(position) {
    let currentNode = this.head;
    const length = this._size;

    // 1st use-case: invalid position
    if (length === 0 || position < 1 || position > length) {
       throw new Error('Invalid Position');
    }

    // 2nd use-case: first node is removed
    if (position === 1) {
       this.head = currentNode.next;

       // 2nd use-case: there is a second node
       if (this.head) {
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

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.prev = beforeNodeToDelete;
    }
    this._size--;
  };

  // returns first node position where value matches queried value
  searchNodeByValue(value) {
    let currentNode = this.head;

    // 1st use-case: an invalid position
    if (!this._size) {
      throw new Error('Empty List');
    }

    // 2nd use-case: a valid position
    let position = 1;
    while (position <= this._size) {
      if (currentNode.value === value) {
        return position;
      }
      currentNode = currentNode.next;
      position++;
    }

    return null;
  };

  // moves a node in DoublyLinkedList to tail
  repositionToRecent(key) {
    const currentPosition = this.searchNodeByValue(key);
    if (!currentPosition) {
      throw new Error('Node not found');
    }
    this.remove(currentPosition);
    this.add(key);
  };

  // removes node from head of DoublyLinkedList and return it's value
  removeLeastRecent() {
    const leastRecent = this.head.value;
    this.remove(1);
    return leastRecent;
  };

  // prints DoublyLinkedList state from oldest to recent
  print() {
    let currentNode = this.head;
    let list = 'Oldest :'
    while(currentNode) {
      list += ' -> ' + currentNode.value
      currentNode = currentNode.next;
    }
    list += ' -> : Recent';
    console.log(list);
  }
}

export default DoublyLinkedList;
