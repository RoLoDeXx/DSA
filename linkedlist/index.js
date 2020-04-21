class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add = (value) => {
    let node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      while (current.next) current = current.next;

      current.next = node;
    }
    this.size++;
  };

  addAt = (value, index) => {
    if (index > 0 && index > this.size) return false;
    else {
      let node = new Node(value);
      let curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else if (index === this.size) this.add(value);
      else {
        let counter = 0;
        while (counter < index - 1) {
          counter++;
          curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
      }
    }
    this.size++;
  };



let ll = new LinkedList(10);
ll.add(0);
ll.add(1);
ll.add(2);
ll.addAt(7, 3);
ll.printList();
