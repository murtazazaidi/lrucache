# LRUCache for JS
Least Recently Used Cache based on JavaScript


## LRUCache Components
It consists of a Hashmap and a Doubly LinkedList.
1. Hashmap keeps the data against provided key
2. Doubly LinkedList maintains history for recently accessed keys


## A peek under the hood
There are two basic operations in any cache, (i) Addition/Updation (ii) Retrieval. Since latency is an important factor for any cache the data needs to reside in memory but memory is more expensive than storage and due to physical limitations we cannot have infinite memory so the cache must have limited amount of records at given point in time. This raises need for a retention policy. As the name suggests LRUCache retains only the most recently accessed data in cache, replacing least recently accessed data with newly added one.

Retrieval and Updation processes can be broken as
#### 1. Retrieval
- Lookup in hashmap for data against key, if found then return the data and proceed

- Look for the key in linkedlist and reposition it to more recent end

#### 2. Addition/Updation
- Check if it's an addition or updation. If it's an updation, we will update the data against the key and reposition the node in linkedlist to more recent end

- If it's an addition, we will check if there cache size won't exceed capacity. If size won't exceed capacity we will add the data in hashmap and create a new node with the key and add it on the recent end of linkedlist

- If size will exceed capacity, retention policy will kickoff. We will remove the least recent node from the linkedlist and remove data against they removed key from hashmap. Then we'll add data against new key as we did in previous step.

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

