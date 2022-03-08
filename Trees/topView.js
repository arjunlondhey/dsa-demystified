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

function processBottomView () {
  let root = createTree();
  bottomView(root);
}

function processLevelOrder () {
  let root = createTree();
  levelOrder(root);
}

/** Uncomment below function to run required traversal */
processBottomView();

function bottomView (root) {
  if (!root) return null;

  let queue = [],
    map = {};
  queue.push({ root: root, hd: 0 });

  while (queue.length) {
    let element = queue.shift();

    if (!map[element.hd])
      map[element.hd] = element.root.data;

    if (element.root.left) {
      queue.push({ root: element.root.left, hd: element.hd - 1 });
    }

    if (element.root.right) {
      queue.push({ root: element.root.right, hd: element.hd + 1 });
    }
  }

  _.forEach(map, (value, key) => {
    console.log(value);
  });
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

