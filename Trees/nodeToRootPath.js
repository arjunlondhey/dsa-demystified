// Date: 01-12-2021

// node to root path


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

let path = [];
function nodeToRootPath (root, value) {
  if (!root) {
    return false;
  }

  if (root.data === value) {
    path.push(root.data);
    return true;
  }

  let ltree = nodeToRootPath(root.left, value);
  let rtree = nodeToRootPath(root.right, value);

  if (ltree || rtree) {
    path.push(root.data);
    return true;
  }

  return false;
}

let root = createTree();
nodeToRootPath(root, 10);
console.log(path);