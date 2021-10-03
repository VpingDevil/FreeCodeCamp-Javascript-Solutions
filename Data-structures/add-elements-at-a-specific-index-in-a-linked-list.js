// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/add-elements-at-a-specific-index-in-a-linked-list


function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = (idx, el) =>{
    if(idx < 0 || idx >= length) return false;
    let temp = new Node(el);
    if(idx === 0){
      temp.next = head;
      head = temp;
    }else{
      let id = 0;
      let p = head;
      while( ++id != idx - 1 ) p = p.next;
      temp.next = p.next;
      p.next = temp;
    }
    length++;
    return true;
  }
  // Only change code above this line
}
