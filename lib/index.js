'use strict';

var _LRUCache = require('./LRUCache.js');

var _LRUCache2 = _interopRequireDefault(_LRUCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = new _LRUCache2.default(5);
cache.add('a', 'Murtaza');
cache.add('b', 'Adeel');
cache.add('c', 'Hammad');
cache.add('d', 'Ghalib');
cache.add('e', 'Mehak');
cache.add('f', 'Anns');
console.log(cache.inspect());
console.log(cache.fetch('a'));
console.log(cache.fetch('b'));
console.log(cache.fetch('c'));
console.log(cache.inspect());