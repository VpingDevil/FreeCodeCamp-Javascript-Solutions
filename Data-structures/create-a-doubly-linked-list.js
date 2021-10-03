// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-doubly-linked-list


const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = el =>{
    let temp = new Node(el);
    if(!this.head){
      temp.prev = null;
      this.head = temp;
      this.tail = temp;
    }else{
      temp.prev = this.tail;
      this.tail.next = temp;
      this.tail = temp;
    }
  }
  this.remove = el =>{
    if(!this.head) return null;
    let p = this.head;
    if(p.data===el){
      this.head = p.next;
      this.head.prev = null;
      p = this.head;
    }
    p = p.next;
    while(p && p.next){
      if(p.data===el){
        p.prev.next = p.next;
        p.next.prev = p.prev;
      }
      p = p.next;
    }
    if(p.data === el){
      this.tail = p.prev;
      this.tail.next = null;
    }
  }
  // Only change code above this line
};
