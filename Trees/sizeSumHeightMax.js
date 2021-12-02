// Date: 01-12-2021

const { isInteger } = require("lodash");

// tree basics :)


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
      4      5     6    7
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

// Get height of the tree (max (lh, rh))
function getTreeHeight (root) {
  if (root === null) {
    return -1;
  }

  let lh = getTreeHeight(root.left);
  let rh = getTreeHeight(root.right);

  return 1 + Math.max(lh, rh);
}

function getTreeHeightHelper () {
  let root = createTree();
  console.log(getTreeHeight(root));
}

// -----------------------------------------------------------------------------------------
// Get size of the tree (no of nodes in tree)
function getTreeSize (root) {
  if (!root) return 0;

  return 1 + getTreeSize(root.left) + getTreeSize(root.right);
}

function getTreeSizeHelper () {
  let root = createTree();
  console.log(getTreeSize(root));
}

// -----------------------------------------------------------------------------------------
// Get sum of the tree (sum of all nodes in tree)
function getTreeSum (root) {
  if (!root) return 0;

  return root.data + getTreeSize(root.left) + getTreeSize(root.right);
}

function getTreeSumHelper () {
  let root = createTree();
  console.log(getTreeSum(root));
}
// -----------------------------------------------------------------------------------------
// Get maximum value from all nodes in tree
function getTreeMaxValue (root) {
  if (!root) return 0;

  let ltree = getTreeMaxValue(root.left);
  let rtree = getTreeMaxValue(root.right);

  return Math.max(ltree, rtree, root.data);
}
function getTreeMaxValueHelper () {
  let root = createTree();
  console.log(getTreeMaxValue(root));
}
// -----------------------------------------------------------------------------------------
// getTreeHeightHelper();
// getTreeSizeHelper();
// getTreeSumHelper();
// getTreeMaxValueHelper();