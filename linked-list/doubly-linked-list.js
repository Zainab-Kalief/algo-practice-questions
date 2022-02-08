// Doubly Link List

function Dll() {
  this.head = null
  this.tail = null
  this.length = 0
}

function Node(val) {
  this.val = val
  this.next = null
  this.previous = null
}

//Add value to the front of the list
Dll.prototype.add_front = function (val) {
  var node = new Node(val), head = this.head
  if (!head) {
    this.head = node
    this.tail = node
  } else {
    this.head = node
    node.next = head
    head.previous = node
  }
  return this
};

//Add value to the back of the list
Dll.prototype.add_back = function (val) {
  var node = new Node(val), tail = this.tail
  if (!tail) {
    this.head = node
    this.tail = node
  } else {
    this.tail = node
    node.previous = tail
    tail.next = node
  }
  return this
};

//Insert value to list at given index using recursion 
Dll.prototype.insert = function (val, ind, current = this.head) {
  var node = new Node(val)
  if (!current) {
    return false
  }
  if (ind == 0) {
    this.head = node
    node.next = current
    current.previous = node
    return this
  }
  if (ind == 1) {
    var temp = current.next
    if (temp == null) {
      current.next = node
      node.previous = current
      this.tail = node
    } else {
      current.next = node
      node.previous = current
      node.next = temp
      temp.previous = node
    }
    return this
  }
  return this.insert(val, ind - 1, current.next)
};

//Remove value from list at given index
Dll.prototype.delete = function (ind, current = this.head) {
  if (!current) {
    return false
  }
  if (ind == 0) {
    var temp1 = current.previous
    var temp2 = current.next
    if (temp2 == null) {
      this.tail = temp1
      temp1.next = null
      current = null
    } else if (temp1 == null) {
      this.head = temp2
      temp2.previous = null
      current = null
    } else {
      temp1.next = temp2
      temp2.previous = temp1
      current = null
    }
    return this
  }
  return this.delete(ind - 1, current.next)
};

//Reverse list
Dll.prototype.reverse = function () {
  var current = this.head, temp;
  while (current) {
    temp = current.previous
    current.previous = current.next
    current.next = temp
    current = current.previous
  }
  temp = this.head
  this.head = this.tail
  this.tail = temp
  return this
};
