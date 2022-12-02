class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // With Tail we can insert last ele in constant time
    this.size = 0;
  }

  // Constant time
  insertFirst(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = this.head;
    }
    this.size++;
  }

  // Constant time
  insertLast(val) {
    if (!this.tail) {
      this.insertFirst(val);
      return;
    }

    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  insertAt(val, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index === this.size) {
      this.insertLast(val);
      return;
    }

    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }

    let node = new Node(val, temp.next);
    temp.next = node;
    this.size++;
  }

  // Insert using recursion
  insertRec(val, index) {
    this.head = this.insertRecPrivate(val, index, this.head);
  }

  insertRecPrivate(val, index, node) {
    if (index === 0) {
      let temp = new Node(val, node);
      this.size++;
      return temp;
    }
    // console.log(`node.next = ${node.next.value}`);
    node.next = this.insertRecPrivate(val, index-1 , node.next);
    return node;
  }

  removeFirst() {
    let val = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return val;
  }

  removeLast() {
    if (this.size <= 1) {
      return this.removeFirst();
    }

    let secondLast = this.getValue(this.size - 2);
    let val = this.tail.value;
    this.tail = secondLast;
    this.tail.next = null;
    return val;
  }

  removeAt(index) {
    if (index === 0) {
      return this.deleteFirst();
    }

    if (index === this.size - 1) {
      return this.deleteLast();
    }

    let prev = this.getValue(index - 1);
    let val = prev.next.value;
    prev.next = prev.next.next;
    return val
  }

  find(val) {
    let node = this.head;
    while (node) {
      if (node.value === val) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  getValue(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // Remove duplicates
  removeDups() {
    let node = this.head;

    while (node.next) {
      if (node.value === node.next.value) {
        node.next = node.next.next;
        this.size--;
      } else {
        node = node.next;
      }
    }
    this.tail = node;
    this.tail.next = null;
  }

  display() {
    let temp = this.head;

    while(temp) {
      console.log(temp.value + ' -> ');
      temp = temp.next;
    }
    console.log("END");
    console.log('');
  }
}

let ll = new LinkedList();

ll.insertFirst(3);
ll.insertFirst(2);
ll.insertFirst(8);
ll.insertFirst(17);
ll.insertLast(99);
ll.insertLast(99);
ll.insertAt(100, 3);
// ll.removeAt(2)
ll.display()
ll.insertRec(88, 2);
ll.display()
ll.removeDups();
ll.display()