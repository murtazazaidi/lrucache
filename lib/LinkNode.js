"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkNode = function LinkNode(nodeValue) {
  var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, LinkNode);

  this.next = next;
  this.prev = prev;
  this.value = nodeValue;
};

exports.default = LinkNode;