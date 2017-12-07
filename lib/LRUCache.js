'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DoublyLinkedList = require('./DoublyLinkedList.js');

var _DoublyLinkedList2 = _interopRequireDefault(_DoublyLinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LRUCache = function () {
  function LRUCache() {
    var constraint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000;

    _classCallCheck(this, LRUCache);

    // Map for keeping actual data
    this.data = {};
    // List to maintain the recent access (only hashkeys)
    this.doublyList = new _DoublyLinkedList2.default();
    // No of items to be stored at one time in Cache
    this.constraint = constraint;
    this.size = this.size.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
  }

  // returns size of items stored in LRUCache


  _createClass(LRUCache, [{
    key: 'size',
    value: function size() {
      return this.doublyList._size;
    }
  }, {
    key: 'set',


    // adds/updates an item to cache and marks it least recently used
    value: function set(key, value) {
      if (this.data[key]) {
        this.doublyList.repositionToRecent(key);
      } else if (this.size() < this.constraint) {
        this.doublyList.add(key);
      } else {
        var leastRecent = this.doublyList.removeLeastRecent();
        if (!leastRecent) {
          throw new Error('Cache broke');
        }
        delete this.data[leastRecent];
        this.doublyList.add(key);
      }
      this.data[key] = value;
    }
  }, {
    key: 'get',


    // fetches data from the cache if available and marks it least recently used
    value: function get(key) {
      var data = this.data[key];
      if (!data) {
        return null;
      }
      this.doublyList.repositionToRecent(key);
      return data;
    }
  }, {
    key: 'clearAll',


    // clears all data from cache
    value: function clearAll() {
      // Clearing all data in Hashmap
      this.data = {};
      // Clearing list to maintain the recent access
      this.doublyList = new _DoublyLinkedList2.default();
    }
  }]);

  return LRUCache;
}();

exports.default = LRUCache;