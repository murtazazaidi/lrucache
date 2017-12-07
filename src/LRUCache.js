import DoublyLinkedList from './DoublyLinkedList.js';

class LRUCache {
  constructor(constraint = 100000) {
    // Map for keeping actual data
    this.data = {};
    // List to maintain the recent access (only hashkeys)
    this.doublyList = new DoublyLinkedList();
    // No of items to be stored at one time in Cache
    this.constraint = constraint;
    this.size = this.size.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
  }

  // returns size of items stored in LRUCache
  size() {
    return this.doublyList._size;
  };

  // adds/updates an item to cache and marks it least recently used
  set(key, value) {
    if (this.data[key]) {
      this.doublyList.repositionToRecent(key);
    } else if (this.size() < this.constraint) {
      this.doublyList.add(key);
    } else {
      const leastRecent = this.doublyList.removeLeastRecent();
      if (!leastRecent) {
        throw new Error('Cache broke');
      }
      delete this.data[leastRecent];
      this.doublyList.add(key);
    }
    this.data[key] = value;
  };

  // fetches data from the cache if available and marks it least recently used
  get(key) {
    const data = this.data[key];
    if (!data) {
      return null;
    }
    this.doublyList.repositionToRecent(key);
    return data;
  };

  // clears all data from cache
  clearAll() {
    // Clearing all data in Hashmap
    this.data = {};
    // Clearing list to maintain the recent access
    this.doublyList = new DoublyLinkedList();
  }

}
export default LRUCache;
