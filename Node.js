class Node {
  constructor(nodeValue, prev = null, next = null) {
    this.next = next;
    this.prev = prev;
    this.value = nodeValue;
  }
}

export default Node;
