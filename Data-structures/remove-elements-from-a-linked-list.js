// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list


function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
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
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    // Only change code below this line
    if(head.element===element){
      head = head.next;
      return --length;
    }
    var p = head;
    while(p.next && p.next.element!==element) p=p.next;
    if(p.next===null) return;
    p.next = p.next.next;
    return --length;
    // Only change code above this line
  };
}
