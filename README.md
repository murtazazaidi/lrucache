# LRUCache for JS
Least Recently Used Cache based on JavaScript


## Components
It consists of a Hashmap and a Doubly LinkedList.
1. Hashmap keeps the data against provided key
2. Doubly LinkedList maintains history for recently accessed keys


## Interface
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
cache.add(key, value);
```


3. Fetch:
```javascript
cache.fetch('venus');
// returns {radius: 6052, unit: "km", dayLength: 116.75}
```


## Usage
NodeJS should be installed
```
# Run once after cloning the poject to install dependencies
npm install .

# Run each time you want to run the script
npm run build && npm run start

# driver script is in index.js, feel free to experiment around
```

