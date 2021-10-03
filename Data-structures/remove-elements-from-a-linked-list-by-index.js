// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list-by-index


function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    let node = new Node(element);
    if(head === null){
      head = node;
    } else {
      let currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
  this.removeAt = idx =>{
    if(idx < 0 || idx >= length) return null;
    if(!idx){
      let el = head.element;
      head = null;
      length--;
      return el;
    }
    let p = head;
    let id = 0;
    while(++id != idx){
      p = p.next;
    }
    let el = p.next.element;
    p.next = p.next.next;
    length--;
    return el;
  }
  // Only change code above this line
}
