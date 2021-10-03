// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list


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

  this.remove = function(element){
    // Only change code below this line
    if(head.element===element){
      head = head.next;
      return --length;
    }
    let p = head;
    while(p.next && p.next.element!==element) p=p.next;
    if(p.next===null) return;
    p.next = p.next.next;
    return --length;
    // Only change code above this line
  };
}
