// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-hash-table


var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) =>{
    var idx = hash(key);
    if(this.collection[idx]===undefined) this.collection[idx] = {};
    this.collection[idx][key] = value;
  };
  this.remove = key =>{
    var idx = hash(key);
    if(this.collection[idx]===undefined) return null;
    delete this.collection[idx][key];
    if(!Object.keys(this.collection[idx]).length) delete this.collection[idx];
  };
  this.lookup = key =>{
    var idx = hash(key);
    if(this.collection[idx]===undefined) return null;
    var obj = this.collection[idx][key];
    return obj===undefined?null:obj;
  };
  // Only change code above this line
};
