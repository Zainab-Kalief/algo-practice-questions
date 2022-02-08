// Binary Search Trees

function BST() {
  this.root = null;
}
function Node(val) {
  this.left = null;
  this.right = null;
  this.val = val;
}

//Add value to tree
BST.prototype.add = function(val) {
  var node = new Node(val),
    current = this.root;
  if (!this.root) this.root = node;
  while (current) {
    if (val > current.val) {
      if (!current.right) {
        current.right = node;
        return this;
      } else {
        current = current.right;
      }
    } else {
      if (!current.left) {
        current.left = node;
        return this;
      } else {
        current = current.left;
      }
    }
  }
  return this;
};

//Check length of tree
BST.prototype.length = function(current = this.root) {
  if (!current) return 0;
  var count = 1;
  if (current.left) {
    count += this.length(current.left);
  }
  if (current.right) {
    count += this.length(current.right);
  }
  return count;
};

//Check if tree contains value 
BST.prototype.contains = function(val) {
  if (!this.root) return false;
  var current = this.root;
  while (current) {
    if (current.val == val) return true;
    if (val > current.val) {
      if (!current.right) return false;
      current = current.right;
    } else {
      if (!current.left) return false;
      current = current.left;
    }
  }
};

//Get height of tree
BST.prototype.height = function(curr = this.root) {
  return curr ? Math.max(this.height(curr.left), this.height(curr.right)) + 1 : 0;
};

//Check if the tree is balanced
BST.prototype.isBalanced = function(curr = this.root) {
  if (!curr) return true;
  let left = this.height(curr.left);
  let right = this.height(curr.right);

  if (Math.abs(left - right) <= 1 && this.isBalanced(curr.left) && this.isBalanced(curr.right)) {
    return true;
  }

  return false;
};

//Check if tree is valid
BST.prototype.is_valid = function(node = this.root, min = -Infinity, max = Infinity) {
  if (!node) return true; //even if node.left /node.right below was null it will return true cos it doesnt exist
  if (node <= min || node > max) return false;
  return this.is_valid(node.left, min, node.val) && this.is_valid(node.right, node.val, max);
};

//Convert tree to array - in-order
BST.prototype.to_array_inordered = function(arr = [], current = this.root) {
  if (!current) return arr;
  if (current.left) {
    this.to_array_inordered(arr, current.left);
  }
  arr.push(current.val);
  if (current.right) {
    this.to_array_inordered(arr, current.right);
  }
  return arr;
};

//Convert tree to array - pre-order
BST.prototype.to_array_preordered = function(arr = [], current = this.root) {
  if (!current) return arr;
  if (current == this.root) arr.push(current.val);
  if (current.left) {
    this.to_array_preordered(arr, current.left);
  }
  if (current != this.root) arr.push(current.val);
  if (current.right) {
    this.to_array_preordered(arr, current.right);
  }
  return arr;
};

//Convert tree to array - post-order
BST.prototype.to_array_postordered = function(arr = [], current = this.root) {
  if (!current) return arr;
  if (current.left) {
    this.to_array_postordered(arr, current.left);
  }
  if (current != this.root) arr.push(current.val);
  if (current.right) {
    this.to_array_postordered(arr, current.right);
  }
  if (current == this.root) arr.push(current.val);
  return arr;
};

//Find if value is on tree
BST.prototype.find = function(val) {
  if (!this.root) return false;
  var current = this.root;
  var previous;
  while (current) {
    if (current.val == val) return [current, previous];
    if (val > current.val) {
      if (!current.right) return false;
      previous = current;
      current = current.right;
    } else {
      if (!current.left) return false;
      previous = current;
      current = current.left;
    }
  }
};

//Delete value from tree
BST.prototype.delete = function(val) {
  var result = this.find(val);
  if (result) {
    if (!result[0].left && !result[0].right) {
      if (result[0].val > result[1].val) {
        result[1].right = null;
      } else {
        result[1].left = null;
      }
    } else if ((result[0].left && !result[0].right) || (!result[0].left && result[0].right)) {
      var child = result[0].left;
      if (result[0].right) {
        child = result[0].right;
      }
      if (result[0].val > result[1].val) {
        result[1].right = child;
      } else {
        result[1].left = child;
      }
    } else {
      var runner = result[0].right;
      if (!runner.left) {
        result[0].val = runner.val;
        result[0].right = runner.right;
      } else {
        var current = runner.left;
        var previous = runner;
        while (current.left) {
          previous = current;
          current = current.left;
        }
        result[0].val = current.val;
        previous.left = current.right;
      }
    }
  } else {
    return console.error("value doesnt exist");
  }
};

///SAME FUNCTIONS AS SOME ABOVE but better modification
// function BTS() {
//   this.root = null
// }
// function Node(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }
//
// BTS.prototype.add = function (val) {
//   var node = new Node(val), current = this.root
//   if(!this.root) this.root = node
//   while (current) {
//       if(val < current.val) {
//         if(!current.left) {
//           current.left = node
//           return this
//         } else {
//           current = current.left
//
//         }
//       } else {
//         if(!current.right) {
//           current.right = node
//           return this
//         } else {
//           current = current.right
//         }
//       }
//     }
//   return this
// }
//
// var bts1 = new BTS()
// bts1.add(10).add(8).add(15).add(6).add(12).add(11).add(10);
//
// BTS.prototype.height2 = function (current = this.root) {
//   if(!current) return 0
//   return Math.max(this.height2(current.left), this.height2(current.right)) + 1
// };
//
// console.log(bts1.height2());
//
// BTS.prototype.valid = function (current = this.root, min=-Infinity, max=Infinity) {
//   if(!current) return true
//   if(current.val < min || current.val > max) return false
//   return this.valid(current.left, min, current.val) && this.valid(current.right, current.val, max)
// };
// console.log(bts1.valid());
