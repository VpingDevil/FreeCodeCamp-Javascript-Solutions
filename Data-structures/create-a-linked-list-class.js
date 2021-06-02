// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-linked-list-class


function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    var temp = new Node(element);
    if(head===null) head = temp;
    else{
      var p = head;
      while(p.next!==null) p=p.next;
      p.next = temp;
    }
    length++;
    // Only change code above this line
  };
}
