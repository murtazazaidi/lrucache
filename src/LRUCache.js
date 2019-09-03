import DoublyLinkedList from './DoublyLinkedList.js';

class LRUCache {
  constructor(constraint = 100000) {
    // Map for keeping actual data
    this.data = {};
    // List to maintain the recent access (only hashkeys)
    this.doublyList = new DoublyLinkedList();
    // No of items to be stored at one time in Cache
    this.constraint = constraint;
  };

  /**
   * Returns size of items stored in LRUCache
   */
  size = () => {
    return this.doublyList._size;
  };

  /**
   * Adds/updates an item to cache and marks it least recently used
   * @param {string} key
   * @param {any} value
   */
  set = (key, value) => {
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

  /**
   * Fetches data from the cache if available and marks it least recently used
   * @param {string} key
   */
  get = (key) => {
    const data = this.data[key];
    if (data === undefined) {
      return null;
    }
    this.doublyList.repositionToRecent(key);
    return data;
  };

  /**
   * Removes data from the cache and linkedlist if available
   * @param {string} key
   */
  remove = (key) => {
    const data = this.data[key];
    if (data === undefined) {
      return null;
    }
    delete this.data[key];
    this.doublyList.removeByValue(key);
    return data;
  };

  /**
   * Resets the cache
   */
  clearAll = () => {
    // Clearing all data in Hashmap
    this.data = {};
    // Clearing list to maintain the recent access
    this.doublyList = new DoublyLinkedList();
  };
}
export default LRUCache;
