// LRU Cache
function LRU() {
  this.data = ['heap']
  this.size = 4
}
function Node(val) {
  this.val = val
  this.pri = new Date()
}
LRU.prototype.swap = function (ind, ind2) {
  let temp = this.data[ind]
  this.data[ind] = this.data[ind2]
  this.data[ind2] = temp
};
LRU.prototype.find = function (node) {
  for (var i = 1; i < this.data.length; i++) {
    if(this.data[i].pri == node.pri) {
      return i
    }
  }
  return false
};

// Add new value to cache
LRU.prototype.enqueque = function (val) {
  var node = new Node(val)
  this.data.push(node)
  var ind = this.data.length - 1
  var parent_ind = Math.floor(ind / 2)
  while (parent_ind > 0 && this.data[ind].val < this.data[parent_ind].val) {
    this.swap(ind, parent_ind)
    ind = parent_ind
    parent_ind = Math.floor(ind / 2)
  }
  return this
};
LRU.prototype.repair = function (val) {
  var ind = val
  var child_ind = ind * 2
  if(child_ind > this.data.length) return
  while(child_ind < this.data.length) {
    if(this.data[child_ind] && this.data[child_ind + 1]) {
      if( this.data[child_ind].val < this.data[ind].val || this.data[child_ind + 1].val < this.data[ind].val ) {
        if(this.data[child_ind].val < this.data[child_ind + 1].val) {
          this.swap(child_ind, ind)
          ind = child_ind
          child_ind = ind * 2
        } else {
          this.swap(child_ind + 1, ind)
          ind = child_ind + 1
          child_ind = ind * 2
        }
      } else {
        ind = child_ind
        child_ind = ind * 2
      }

    } else {
      if (this.data[child_ind].val < this.data[ind].val) {
          this.swap(child_ind, ind)
      }
      ind = child_ind
      child_ind = ind * 2
    }
  }
  return this
};

// Remove value from cache
LRU.prototype.dequeque = function () {
  this.swap(this.data.length - 1, 1)
  let oldest = this.data.pop()
  var ind = 1
  var child_ind = ind * 2
  if(child_ind > this.data.length) return oldest
  this.repair(ind)
};
var lru1 = new LRU()
lru1.enqueque(6).enqueque(8).enqueque(4).enqueque(10).enqueque(2).enqueque(9);
