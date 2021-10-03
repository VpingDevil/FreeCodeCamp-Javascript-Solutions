// Probelm Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/search-within-a-linked-list


function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    let currentNode = head;
    let previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = () => head===null;
  this.indexOf = el =>{
    let idx = 0;
    if(head.element===el) return idx;
    let p = head;
    while(p.next!=null && p.element!==el){
      p = p.next;
      idx++;
    }
    if(p.element===el) return idx;
    return -1;
  }
  this.elementAt = idx =>{
    if(idx>=length) return undefined
    let id = 0;
    let p = head;
    while( id++ != idx) p = p.next;
    return p.element;
  }
  // Only change code above this line
}
