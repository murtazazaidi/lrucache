'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LinkNode = require('./LinkNode.js');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoublyLinkedList = function DoublyLinkedList() {
  var _this = this;

  _classCallCheck(this, DoublyLinkedList);

  this.add = function (nodeValue) {
    var newNode = new _LinkNode2.default(nodeValue);
    if (_this._size) {
      _this.tail.next = newNode;
      newNode.prev = _this.tail;
      _this.tail = newNode;
    } else {
      _this.head = newNode;
      _this.tail = newNode;
    }
    _this._size++;
    return newNode;
  };

  this.remove = function (position) {
    var currentNode = _this.head;
    var length = _this._size;

    // 1st use-case: invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error('Invalid Position');
    }

    // 2nd use-case: first node is removed
    if (position === 1) {
      _this.head = currentNode.next;

      // 2nd use-case: there is a second node
      if (_this.head) {
        _this.head.prev = null;
      } else {
        // 2nd use-case: there is no second node
        _this.tail = null;
      }
    } else if (position === _this._size) {
      // 3rd use-case: the last node is removed
      _this.tail = _this.tail.prev;
      _this.tail.next = null;
    } else {
      // 4th use-case: a middle node is removed
      var count = 1;
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }

      var afterNodeToDelete = currentNode.next;
      var beforeNodeToDelete = currentNode.prev;

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.prev = beforeNodeToDelete;
    }
    _this._size--;
  };

  this.searchNodeByValue = function (value) {
    var currentNode = _this.head;

    // 1st use-case: an invalid position
    if (!_this._size) {
      throw new Error('Empty List');
    }

    // 2nd use-case: a valid position
    var position = 1;
    while (position <= _this._size) {
      if (currentNode.value === value) {
        return position;
      }
      currentNode = currentNode.next;
      position++;
    }

    return null;
  };

  this.repositionToRecent = function (key) {
    _this.removeByValue(key);
    _this.add(key);
  };

  this.removeByValue = function (key) {
    var currentPosition = _this.searchNodeByValue(key);
    if (!currentPosition) {
      throw new Error('Node not found');
    }
    _this.remove(currentPosition);
  };

  this.removeLeastRecent = function () {
    var leastRecent = _this.head.value;
    _this.remove(1);
    return leastRecent;
  };

  this._size = 0;
  this.head = null;
  this.tail = null;
}

/**
 * Adds a node to DoublyLinkedList, at tail
 * @param {any} nodeValue
 */


/**
 * Removes the node from DoublyLinkedList from given position
 * @param {number} position
 */


/**
 * Returns first node position where value matches queried value
 * @param {any} value
 */


/**
 * Moves a node in DoublyLinkedList to tail
 * @param {string} key
 */


/**
 * Searched and removes a node in DoublyLinkedList by value
 * @param {string} key
 */


/**
 * Removes node from head of DoublyLinkedList and return it's value
 */
;

exports.default = DoublyLinkedList;