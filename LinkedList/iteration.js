let _ = require('lodash');

function ListNode (val) {
  this.val = val;
  this.next = null;
}

class List {
  head = null;

  addNode (val) {
    if (!this.head) {
      this.head = new ListNode(val);
    } else {
      let node = new ListNode(val),
        headPtr = this.head;

      while (headPtr.next != null) {
        headPtr = headPtr.next;
      }

      headPtr.next = node;
    }

    return this.head;
  }
}

let list = new List();
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)
list.addNode(6)
console.log(JSON.stringify(list))