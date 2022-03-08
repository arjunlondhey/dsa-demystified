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
  let rt1 = root.right;

  lt1.left = new TreeNode(4);
  lt1.right = new TreeNode(5);

  rt1.left = new TreeNode(6);
  rt1.right = new TreeNode(7);

  lt2 = lt1.left;

  lt2.left = new TreeNode(8);
  lt2.right = new TreeNode(9);
  lt2.right.right = new TreeNode(10);

  return root;
}

function processVerticalTraversal () {
  let root = createTree();
  verticalTraversal(root);
}

function findHeightTree () {
  let root = createTree();
  return treeHeight(root);
}

/** Uncomment below function to run required traversal */
console.log(findHeightTree());

function treeHeight (root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}