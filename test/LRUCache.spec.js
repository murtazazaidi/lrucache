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
  cache.set('a', 'Adeel');
  cache.set('b', 'Murtaza');
  cache.set('c', 'Hammad');
  cache.set('d', 0);
  cache.set('e', 'Mehak');

  it('sets provided items in the cache', () => {
    expect(cache.size()).to.equal(5);
  });

  // Add an item after CACHE_LIMIT has been reached
  cache.set('f', 'Anns');

  it('removes the least recently used element when retention policy kicks in', () => {
    expect(cache.size()).to.equal(CACHE_LIMIT);
    expect(cache.get('a')).to.equal(null);
  });

  it('returns the cached item with FALSY value if available in LRUCache', () => {
    expect(cache.get('d')).to.equal(0);
  });

  it('returns the cached item if available in LRUCache', () => {
    expect(cache.get('b')).to.equal('Murtaza');
  });

  it('updates the access history when an item is accessed', () => {
    // Add another item in cache to remove the least recently accessed item
    cache.set('g', 'Irtaza');
    expect(cache.size()).to.equal(CACHE_LIMIT);
    // Item against key 'b' was accessed and now item against key 'c' is least recently accessed
    expect(cache.get('c')).to.equal(null);
    expect(cache.get('b')).to.equal('Murtaza');
  });

  it('overrides the value against the key if key already exists', () => {
    // updating value against key 'g'
    cache.set('g', 'Mujtaba');
    expect(cache.get('g')).to.equal('Mujtaba');
  });

  it('removes the value from cache if value exists in cache', () => {
    const sizeBeforeRemove = cache.size();
    // removing value against key 'g'
    cache.remove('g');
    const sizeAfterRemove = cache.size();
    expect(cache.get('g')).to.equal(null);
    expect(sizeBeforeRemove).to.equal(sizeAfterRemove + 1);
  });

  it('does nothing on remove if the value does not exist in cache', () => {
    const sizeBeforeRemove = cache.size();
    // removing value against key 'g' which is already removed now
    cache.remove('g');
    const sizeAfterRemove = cache.size();
    expect(cache.get('g')).to.equal(null);
    expect(sizeBeforeRemove).to.equal(sizeAfterRemove);
  });

  it('clears all data from the cache', () => {
    // updating value against key 'g'
    cache.clearAll();
    expect(cache.get('g')).to.equal(null);
    expect(cache.get('b')).to.equal(null);
  });

});
