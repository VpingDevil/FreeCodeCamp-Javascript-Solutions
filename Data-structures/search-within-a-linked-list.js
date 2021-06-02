// Probelm Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/search-within-a-linked-list


function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
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
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
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
    var idx = 0;
    if(head.element===el) return idx;
    var p = head;
    while(p.next!=null && p.element!==el){
      p = p.next;
      idx++;
    }
    if(p.element===el) return idx;
    return -1;
  }
  this.elementAt = idx =>{
    if(idx>=length) return undefined
    var id = 0;
    var p = head;
    while(id++!=idx) p = p.next;
    return p.element;
  }
  // Only change code above this line
}
