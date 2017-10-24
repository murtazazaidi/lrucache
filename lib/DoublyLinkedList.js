'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node.js');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoublyLinkedList = function () {
  function DoublyLinkedList() {
    _classCallCheck(this, DoublyLinkedList);

    this._size = 0;
    this.head = null;
    this.tail = null;
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.searchNodeByValue = this.searchNodeByValue.bind(this);
    this.repositionToRecent = this.repositionToRecent.bind(this);
    this.removeLeastRecent = this.removeLeastRecent.bind(this);
    this.print = this.print.bind(this);
  }

  _createClass(DoublyLinkedList, [{
    key: 'add',
    value: function add(nodeValue) {
      var newNode = new _Node2.default(nodeValue);
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
    }
  }, {
    key: 'remove',
    value: function remove(position) {
      var currentNode = this.head;
      var length = this._size;

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
      this._size--;
    }
  }, {
    key: 'searchNodeByValue',
    value: function searchNodeByValue(value) {
      var currentNode = this.head;

      // 1st use-case: an invalid position
      if (!this._size) {
        throw new Error('Empty List');
      }

      // 2nd use-case: a valid position
      var position = 1;
      while (position <= this._size) {
        if (currentNode.value === value) {
          return position;
        }
        currentNode = currentNode.next;
        position++;
      }

      return null;
    }
  }, {
    key: 'repositionToRecent',
    value: function repositionToRecent(key) {
      var currentPosition = this.searchNodeByValue(key);
      if (!currentPosition) {
        throw new Error('Node not found');
      }
      this.remove(currentPosition);
      this.add(key);
    }
  }, {
    key: 'removeLeastRecent',
    value: function removeLeastRecent() {
      var leastRecent = this.head.value;
      this.remove(1);
      return leastRecent;
    }
  }, {
    key: 'print',
    value: function print() {
      var currentNode = this.head;
      var list = 'Oldest :';
      while (currentNode) {
        list += ' -> ' + currentNode.value;
        currentNode = currentNode.next;
      }
      list += ' -> : Recent';
      console.log(list);
    }
  }]);

  return DoublyLinkedList;
}();

exports.default = DoublyLinkedList;