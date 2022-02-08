// Singly Linked List (SLL)

// SLL object
function Sll() {
  this.head = null;
  this.length = 0;
}

// Node object
function Node(val) {
  this.val = val;
  this.next = null;
}

//Add value to list
Sll.prototype.add = function(val) {
  var current = this.head;
  if (!current) {
    this.head = new Node(val);
    this.length += 1;
  } else {
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(val);
    this.length += 1;
  }
  return this;
};

//Delete first node
Sll.prototype.deleteFirst = function() {
  if (!this.head) {
    return null;
  } else {
    if (this.head.next) {
      var current = this.head;
      this.head = current.next;
      current.next = null;
      this.length -= 1;
      return current.val;
    } else {
      var current = this.head;
      this.head = null;
      this.length -= 1;
      return current.val;
    }
  }
};

//Delete last node using recursive method
Sll.prototype.delete = function(current = this.head) {
  if (!this.head) return null;
  if (!this.head.next) return this.head.val;
  if (current.next.next == null) {
    var temp = current.next;
    current.next = null;
    this.length -= 1;
    return temp.val;
  }
  return this.delete(current.next);
};

//Delete last node using loop method
Sll.prototype.del = function() {
  var current = this.head,
    previous = null;
  if (!current) return null;
  if (!current.next) (this.head = null), (this.length -= 1);
  while (current.next) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
  this.length -= 1;
  return current.val;
};

//Get X value
Sll.prototype.getX = function(x, current = this.head) {
  if (!this.head || this.length < x || x < 0) return null;
  if (x == 1) {
    return current.val;
  }
  return this.getX(x - 1, current.next);
};

//Remove duplicates from list
Sll.prototype.deDup = function() {
  if (!this.head || !this.head.next) return null;
  var previous = this.head,
    singles = {},
    current = previous.next;
  singles[previous.val] = 0;
  while (current) {
    if (current.val in singles) {
      previous.next = current.next;
      current.next = null;
      current = previous.next;
      this.length -= 1;
    } else {
      singles[current.val] = 0;
      previous = current;
      current = current.next;
    }
  }
};

//Get minimum value from list
Sll.prototype.getMin = function() {
  if (!this.head) return null;
  if (!this.head.next) return this.head.val;
  var current = this.head,
    min = current.val;
  while (current) {
    if (current.val < min) {
      min = current.val;
    }
    current = current.next;
  }
  return min;
};

//Reverse list
Sll.prototype.reverse = function() {
  var origin = this.head;
  var head, move, next;
  while (origin.next) {
    head = this.head;
    move = origin.next;
    next = move.next;
    this.head = move;
    this.head.next = head;
    origin.next = next;
  }
  return this;
};

//Get k from last
Sll.prototype.fromLast = function(k) {
  var current = this.head;
  while (k) {
    current = current.next;
    k--;
  }
  var next = this.head;
  while (current.next) {
    next = next.next;
    current = current.next;
  }
  return next.val;
};

//Check if list is palidrome
Sll.prototype.palidrome = function() {
  var current2 = this;
  this.reverse();
  current2 = current2.head;
  var current1 = this.head;
  while (current1 && current2) {
    if (current1.val != current2.val) return false;
    current1 = current1.next;
    current2 = current2.next;
  }
  return true;
};

//Sum two linked lists
Sll.prototype.sum_lists = function(list) {
  let first = this.reverse().head,
    second = list.reverse().head,
    remainder = 0;
  let ans = new LinkList();
  while (first || second) {
    let sum = remainder;
    if (first && second) {
      sum += first.val + second.val;
      first = first.next;
      second = second.next;
    } else if (first && !second) {
      sum += first.val;
      first = first.next;
    } else {
      sum += second.val;
      second = second.next;
    }
    if (sum >= 10) {
      ans.add(sum - 10);
      remainder = 1;
    } else {
      ans.add(sum);
      remainder = 0;
    }
  }
  if (remainder) ans.add(remainder);
  return ans.reverse();
};

//Insert new node at index
Sll.prototype.insert_val = function(val, ind) {
  var current = this.head;
  var previous;
  var new_node = new Node(val);
  var count = 0;
  if (count == ind) {
    this.head = new_node;
    new_node.next = current;
    return this;
  }
  while (current.next) {
    if (count == ind) {
      previous.next = new_node;
      new_node.next = current;
      return this;
    }
    previous = current;
    current = current.next;
    count += 1;
  }
  if (count == ind) {
    previous.next = new_node;
    new_node.next = current;
    return this;
  }
};

//Loop list
Sll.prototype.loop_list = function(ind) {
  var current = this.head;
  var count = 0;
  var point;
  while (current.next) {
    if (count == ind) {
      point = current;
    }
    current = current.next;
    count += 1;
  }
  if (ind > count) {
    return null;
  } else {
    current.next = point;
    return this;
  }
};

//Check if loop exists in list
Sll.prototype.if_loop = function() {
  let fast = this.head;
  let faster = this.head;
  if (!fast) return false;
  while (fast.next && faster.next && faster.next.next) {
    fast = fast.next;
    faster = faster.next.next;

    if (fast == faster) return true;
  }
  return false;
};

//Fix loop if list is look by making it non-loop
Sll.prototype.fix_loop = function() {
  var runner1 = this.head;
  var runner2 = this.head;
  var previous;
  while (runner2.next.next) {
    runner1 = runner1.next;
    runner2 = runner2.next.next;
    if (runner1 == runner2) {
      runner1 = this.head;
      while (runner1 != runner2) {
        runner1 = runner1.next;
        previous = runner2;
        runner2 = runner2.next;
      }
      previous.next = null;
      return this;
    }
  }
  return false;
};

// Find value at index using recursion 
Sll.prototype.findAtInd = function(ind, current = this.head) {
  if (!current) return false;
  if (ind == 0) return current;
  return this.findAtInd(ind - 1, current.next);
};

// SLL interleave
Sll.prototype.interLeave = function() {
  var half = Math.ceil(this.length / 2);
  var runner1 = this.head;
  var runner2 = this.findAtInd(half);
  var next1, next2;
  while (runner2) {
    next1 = runner1.next;
    next2 = runner2.next;
    runner1.next = runner2;
    runner2.next = next1;
    runner1 = next1;
    runner2 = next2;
  }
  next1.next = null;
  return this;
};

// Flatten list (i.e. node could have child nodes)
Sll.prototype.flatten = function() {
  let curr = this.head;

  if (curr) {
    let next;
    while (curr) {
      if (curr.child) {
        next = curr.next;
        curr.next = curr.child;
        let foo = curr.child;
        while (foo.next) {
          foo = foo.next;
        }
        foo.next = next;
        curr.child = null;
      }
      curr = curr.next;
    }
  }
  return this;
};

function realInterLeave(ll1, ll2) {
  let shorter = ll1,
    longer = ll2;
  if (ll1.length > ll2.length) {
    longer = ll1;
    shorter = ll2;
  }
  let curr = shorter.head,
    c = 1;
  while (curr) {
    longer.insertVal(curr.val, c);
    c += 2;
    curr = curr.next;
  }
  return longer;
}

///SAME FUNCTIONS AS SOME ABOVE but better modification

// Sll.prototype.remove = function (current = this.head) {
//   if (!current) return this
//   if(!current.next.next) current.next = null
//   return this.remove(current.next)
// };
// var sll1 = new Sll()
// Sll.prototype.removeFirst = function () {
//   if(!this.head) return this
//   if(this.head.next) {
//     this.head = this.head.next
//   } else {
//     this.head = null
//   }
//   return this
// };
// Sll.prototype.removeAt = function (val,  previous = this.head, current = this.head) {
//   if(!current.next) return
//   if(val == 0) {
//     previous.next = current.next
//     return
//   }
//   return this.removeAt(val - 1, current, current.next)
// };
// Sll.prototype.reverse = function () {
//   var origin = this.head, mover, next
//   while (origin.next) {
//     mover = origin.next
//     next = mover.next
//     mover.next = this.head
//     this.head = mover
//     origin.next = next
//   }
//   return this
// };
// sll1.add(5).add(7).add(4).reverse()
