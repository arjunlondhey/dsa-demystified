// Date: 08-03-2022
const _ = require('lodash');


class TreeNode {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
/*
                1
          2           3
      4       5     6   7
    8   9
          10
*/
function createTree () {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  let lt1 = root.left;
  // lt1 = 2
  lt1.left = new TreeNode(4);
  lt1.right = new TreeNode(5);
  lt1.right.left = new TreeNode(7);

  lt2 = lt1.left;
  // lt2 = 4
  lt2.left = new TreeNode(6);
  lt2.left.left = new TreeNode(8);


  return root;
}


let isHeightBalanced = true;
function findHeightBalanced () {
  let root = createTree();
  heightBalanced(root);
  //levelOrder(root);
}

/** Uncomment below function to run required traversal */
findHeightBalanced();
console.log(isHeightBalanced);

function heightBalanced (root) {
  if (!root) {
    return 0;
  }


  let ld = heightBalanced(root.left);
  let rd = heightBalanced(root.right);

  if (Math.abs(ld - rd) > 1) {
    isHeightBalanced = false;
  }

  return 1 + Math.max(ld, rd);
}

function levelOrder (root) {
  if (!root) {
    return null;
  }

  let queue = [];
  queue.push(root);

  while (queue.length) {

    let root = queue.shift();
    console.log(root.data);

    if (root.left) {
      queue.push(root.left);
    }

    if (root.right) {
      queue.push(root.right);
    }
  }
}