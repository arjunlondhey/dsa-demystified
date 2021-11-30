// Date: 30-11-2021

// all traversal of tree


class TreeNode {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function createTree () {
  // Create a tree
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  lt1 = root.left;
  rt1 = root.right;

  lt1.left = new TreeNode(4);
  lt1.right = new TreeNode(5);
  rt1.left = new TreeNode(6);
  rt1.right = new TreeNode(7);

  return root;
}

function processInOrder () {
  let root = createTree();
  inOrder(root);
}

function processPreOrder () {
  let root = createTree();
  preOrder(root);
}

function processPostOrder () {
  let root = createTree();
  postOrder(root);
}

function processLevelOrder () {
  let root = createTree();
  levelOrder(root);
}

/** Uncomment below function to run required traversal */
// processInOrder();
// processPreOrder();
//  processPostOrder();
// processLevelOrder();
/*
          1
      2       3
    4   5   6   7
*/

function inOrder (root) {
  if (!root) {
    return;
  }

  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}

function preOrder (root) {
  if (!root) {
    return;
  }
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}

function postOrder (root) {
  if (!root) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
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