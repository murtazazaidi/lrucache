[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues) [![HitCount](http://hits.dwyl.io/murtazazaidi/lrucache.svg)](http://hits.dwyl.io/murtazazaidi/lrucache) [![Build Status](https://travis-ci.org/murtazazaidi/lrucache.svg?branch=master)](https://travis-ci.org/murtazazaidi/lrucache) [![codecov](https://codecov.io/gh/murtazazaidi/lrucache/branch/master/graph/badge.svg)](https://codecov.io/gh/murtazazaidi/lrucache) [![npm version](https://badge.fury.io/js/simple-lrucache.svg)](https://badge.fury.io/js/simple-lrucache)  [![Dependency Status](https://david-dm.org/murtazazaidi/lrucache.svg)](https://david-dm.org/murtazazaidi/lrucache) [![devDependency Status](https://david-dm.org/murtazazaidi/lrucache/dev-status.svg)](https://david-dm.org/murtazazaidi/lrucache#info=devDependencies)


# LRUCache for JS
Least Recently Used Cache based on JavaScript


## LRUCache Components
It consists of a HashMap and a Doubly LinkedList.
1. HashMap keeps the data against provided key
2. Doubly LinkedList maintains history for recently accessed keys


## Under the hood
There are two basic operations in any cache, (i) Addition/Updation (ii) Retrieval. Since latency is an important factor for any cache the data needs to reside in memory but memory is more expensive than storage and due to physical limitations we cannot have infinite memory so the cache must have limited amount of records at given point in time. This raises need for a retention policy. As the name suggests LRUCache retains only the most recently accessed data in cache, replacing least recently accessed data with newly added one.

Retrieval and Updation processes can be broken as
#### 1. Retrieval
- Lookup in HashMap for data against key, if found then return the data and proceed

- Look for the key in LinkedList and reposition it to more recent end

#### 2. Addition/Updation
- Check if it's an addition or updation. If it's an updation, we will update the data against the key and reposition the node in LinkedList to more recent end

- If it's an addition, we will check if there cache size won't exceed capacity. If size won't exceed capacity we will add the data in HashMap and create a new node with the key and add it on the recent end of LinkedList

- If size will exceed capacity, retention policy will kickoff. We will remove the least recent node from the LinkedList and remove data against they removed key from HashMap. Then we'll add data against new key as we did in previous step.

## LRUCache Interface
LRUCache has following methods.

1. Instantiate:
```javascript
// limit is maximum no of items/keys to be kept in cache at one time.
// Once this limit is reached, least recently used item will be dropped in
// favor of more recent additions
var limit = 100;
var cache = new LRUCache(limit);
```


2. Addition/Updation:
```javascript
var key = 'venus';
var value = {
  radius: 6052,
  unit: 'km',
  dayLength: 116.75
};
cache.set(key, value);
```


3. Retrieval:
```javascript
cache.get('venus');
// returns {radius: 6052, unit: "km", dayLength: 116.75}
```


4. Removal:
```javascript
cache.remove('venus');
// returns {radius: 6052, unit: "km", dayLength: 116.75}
// and removes venus from cache
```


5. Clear Cache:
```javascript
cache.clearAll();
// clears all data in the cache
```

## Installation
```
npm install simple-lrucache
```

## Usage
```javascript
// using ES6 import
import LRUCache from 'simple-lrucache';

// or using NodeJS require;
var LRUCache = require('simple-lrucache').default;

var cache = new LRUCache(5);
cache.set('a', 'Murtaza');
cache.set('b', 'Adeel');
cache.set('c', 'Hammad');
cache.set('d', 'Ghalib');
cache.set('e', 'Mehak');
cache.set('f', 'Anns');
console.log(cache.get('a')); // returns null
console.log(cache.get('b')); // returns 'Adeel'
cache.remove('b'); // returns 'Adeel' and removes from cache
console.log(cache.get('b')); // returns null
console.log(cache.get('c')); // return 'Hammad'
cache.clearAll();
console.log(cache.get('c')); // returns null
```


## Build Process for Project
NodeJS should be installed
```
# Run once after cloning the project to install dependencies
npm install .

# Building the project
npm run build

# Build and test the project with coverage report
npm run test
```
