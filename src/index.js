import LRUCache from './LRUCache.js';

const cache = new LRUCache(5);
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
