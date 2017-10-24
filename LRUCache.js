import DoublyLinkedList from './DoublyLinkedList.js';

class LRUCache {
  constructor(constraint = 50) {
    // Map for keeping actual data
    this.data = {};
    // List to maintain the recent access (only hashkeys)
    this.doublyList = new DoublyLinkedList();
    // No of items to be stored at one time in Cache
    this.constraint = constraint;
  }

  // returns size of items stored in LRUCache
  const size = () => {
    return this.doublyList._size;
  };

  // adds an item to cache and marks it least recently used
  const add = (key, value) => {
    if (this.data[key]) {
      this.doublyList.repositionToRecent(key);
    } else if (this.size() < this.constraint) {
      this.doublyList.add(key);
    } else {
      cons leastRecent = this.doublyList.removeLeastRecent();
      if (!leastRecent) {
        throw new Error('Cache broke');
      }
      delete this.data[leastRecent];
      this.doublyList.add(key);
    }
    this.data[key] = value;
  };

  // fetches data from the cache and marks it least recently used
  const fetch = (key) => {
    const data = this.data[key];
    if (!data) {
      return null;
    }
    this.doublyList.repositionToRecent(key);
    return data;
  };

}
export default LRUCache;
