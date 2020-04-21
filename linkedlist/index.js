class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }

  add = (value) => {
    let node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      current = this.head;
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
        node.next = head;
        this.head = node;
      } else {
        let itr = 0,
          prev,
          curr;
        while (itr < index) {
          itr++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
    }
    this.size++;
  };
}
