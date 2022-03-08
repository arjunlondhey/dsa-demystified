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

function flattenTreeHelper () {
  let root = createTree();

  flattenTree(root);

  levelOrder(root);
}

flattenTreeHelper();
function flattenTree (root) {
  if (!root) {
    return null;
  }

  if (!root.left && !root.right) {
    return root;
  }

  //console.log(root);
  let leftNode = flattenTree(root.left);
  let rightNode = flattenTree(root.right);

  if (!leftNode) {
    return root;
  }

  let temp = rightNode;

  root.right = leftNode;

  root.left = null;
  while (leftNode.right) {
    leftNode = leftNode.right;
  }

  leftNode.right = temp;

  return root;
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