// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-hash-table


let called = 0;
const hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

const HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) =>{
    const idx = hash(key);
    if(this.collection[idx] === undefined) this.collection[idx] = {};
    this.collection[idx][key] = value;
  };
  this.remove = key =>{
    const idx = hash(key);
    if(this.collection[idx] === undefined) return null;
    delete this.collection[idx][key];
    if(!Object.keys(this.collection[idx]).length) delete this.collection[idx];
  };
  this.lookup = key =>{
    const idx = hash(key);
    if(this.collection[idx]===undefined) return null;
    const obj = this.collection[idx][key];
    return obj === undefined ? null:obj;
  };
  // Only change code above this line
};
