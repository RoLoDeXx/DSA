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

  prepend = (value) => {
    let node = new Node(value);
    if (this.head === null) {
      this.add(value);
    } else {
      this.addAt(value, 0);
    }
    this.size++;
  };

  remove(index = this.size - 1) {
    if ((index > 0 && index > this.size) || index === this.size) return -1;
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

let ll = new LinkedList(10);
ll.add(5);
ll.add(4);
ll.add(3);
ll.remove();
ll.printList();
console.log(ll.size);
