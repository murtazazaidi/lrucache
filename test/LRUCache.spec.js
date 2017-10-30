import { expect } from 'chai';
import LRUCache from '../lib/LRUCache.js';

describe('LRUCache', () => {
  // Create a LRUCache
  const CACHE_LIMIT = 5;
  const cache = new LRUCache(CACHE_LIMIT);

  it('creates an LRUCache', () => {
    expect(cache).to.be.an('object');
  });

  // Add five elements
  cache.add('a', 'Adeel');
  cache.add('b', 'Murtaza');
  cache.add('c', 'Hammad');
  cache.add('d', 'Ghalib');
  cache.add('e', 'Mehak');

  it('adds provided items in the cache', () => {
    expect(cache.size()).to.equal(5);
  });

  // Add an item after CACHE_LIMIT has been reached
  cache.add('f', 'Anns');

  it('removes the least recently used element when retention policy kicks in', () => {
    expect(cache.size()).to.equal(CACHE_LIMIT);
    expect(cache.fetch('a')).to.equal(null);
  });

  it('returns the cached item if available in LRUCache', () => {
    expect(cache.fetch('b')).to.equal('Murtaza');
  });

  it('updates the access history when an item is accessed', () => {
    // Add another item in cache to remove the least recently accessed item
    cache.add('g', 'Irtaza');
    expect(cache.size()).to.equal(CACHE_LIMIT);
    // Item against key 'b' was accessed and now item against key 'c' is least recently accessed
    expect(cache.fetch('c')).to.equal(null);
    expect(cache.fetch('b')).to.equal('Murtaza');
  });


});
