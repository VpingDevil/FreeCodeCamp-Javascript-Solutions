// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class


class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }

  // Only change code below this line
  add(el){
    return this.has(el)?false:!Boolean(this.dictionary[el] = this.length++)
  }

  remove(el){
    if(!this.has(el)) return false;
    delete this.dictionary[el]
    this.length--;
    return true;
  }

  size(){return this.length}
  
  // Only change code above this line
}
