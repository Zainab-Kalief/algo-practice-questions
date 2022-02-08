
function Heap() {
  this.data = ["heap"]
}

Heap.prototype.add = function (val) {
  this.data.push(val);
  var ind = this.data.length - 1
  var parent_ind = Math.floor(ind/2)
  while(ind > 0 && this.data[ind] < this.data[parent_ind]) {
    this.data[ind] = this.data[parent_ind]
    this.data[parent_ind] = val
    ind = parent_ind
    parent_ind = Math.floor(ind/2)
  }
  return this;
};

Heap.prototype.swap = function (ind1, ind2) {
  let temp = this.data[ind1]
  this.data[ind1] = this.data[ind2]
  this.data[ind2] = temp
};

Heap.prototype.pop_first = function () {
  this.swap(1, this.data.length-1)
  var pop = this.data.pop()
  let ind = 1
  let child_ind = ind * 2
  if(child_ind > this.data.length) return pop; //if we only had on value in array

  while(child_ind < this.data.length && this.data[ind] > this.data[child_ind] || this.data[ind] > this.data[child_ind + 1]) {
    if(this.data[child_ind] && this.data[child_ind +1]) { //if both siblings exist
        if(this.data[child_ind] < this.data[child_ind + 1]) {
          this.swap(ind, child_ind)
          ind = child_ind, child_ind = ind * 2
        } else {
          this.swap(ind, child_ind + 1)
          ind = child_ind + 1, child_ind = ind * 2
        }
    } else { //if only one sibling exist then it will be the left
      this.swap(ind, child_ind)
      ind = child_ind, child_ind = ind * 2
    }
  }
  return pop;
};

var heap = new Heap()
heap.add(5).add(10).add(15).add(8).add(12).add(4).add(20).add(3).add(6)
console.log(heap.data);
heap.pop_first()
console.log(heap.data);
