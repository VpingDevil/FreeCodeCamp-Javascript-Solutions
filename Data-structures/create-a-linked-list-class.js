// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-linked-list-class


function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element){
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
    let temp = new Node(element);
    if(head===null) head = temp;
    else{
      let p = head;
      while(p.next!==null) p=p.next;
      p.next = temp;
    }
    length++;
    // Only change code above this line
  };
}
