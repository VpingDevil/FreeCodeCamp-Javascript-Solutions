// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/reverse-a-doubly-linked-list


var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.reverse = () =>{
      if (!this.head || !this.head.next) {
        return this.head
      }
      let tail, temp, current = this.head;
      while(current){
        if(!tail) tail = current;
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }
      this.head = temp.prev;
      this.tail = tail;
    }
  // Only change code above this line
};
