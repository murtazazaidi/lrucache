'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DoublyLinkedList = require('./DoublyLinkedList.js');

var _DoublyLinkedList2 = _interopRequireDefault(_DoublyLinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LRUCache = function LRUCache() {
  var _this = this;

  var constraint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000;

  _classCallCheck(this, LRUCache);

  this.size = function () {
    return _this.doublyList._size;
  };

  this.set = function (key, value) {
    if (_this.data[key]) {
      _this.doublyList.repositionToRecent(key);
    } else if (_this.size() < _this.constraint) {
      _this.doublyList.add(key);
    } else {
      var leastRecent = _this.doublyList.removeLeastRecent();
      if (!leastRecent) {
        throw new Error('Cache broke');
      }
      delete _this.data[leastRecent];
      _this.doublyList.add(key);
    }
    _this.data[key] = value;
  };

  this.get = function (key) {
    var data = _this.data[key];
    if (!data) {
      return null;
    }
    _this.doublyList.repositionToRecent(key);
    return data;
  };

  this.remove = function (key) {
    var data = _this.data[key];
    if (!data) {
      return null;
    }
    delete _this.data[key];
    _this.doublyList.removeByValue(key);
    return data;
  };

  this.clearAll = function () {
    // Clearing all data in Hashmap
    _this.data = {};
    // Clearing list to maintain the recent access
    _this.doublyList = new _DoublyLinkedList2.default();
  };

  // Map for keeping actual data
  this.data = {};
  // List to maintain the recent access (only hashkeys)
  this.doublyList = new _DoublyLinkedList2.default();
  // No of items to be stored at one time in Cache
  this.constraint = constraint;
}

/**
 * Returns size of items stored in LRUCache
 */


/**
 * Adds/updates an item to cache and marks it least recently used
 * @param {string} key
 * @param {any} value
 */


/**
 * Fetches data from the cache if available and marks it least recently used
 * @param {string} key
 */


/**
 * Removes data from the cache and linkedlist if available
 * @param {string} key
 */


/**
 * Resets the cache
 */
;

exports.default = LRUCache;