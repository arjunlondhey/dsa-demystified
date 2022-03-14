class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree (inputArr, left, right) {
  if (left > right) {
    return null;
  }

  let mid = Math.floor((left + right) / 2);

  let node = new TreeNode(inputArr[mid]);

  if (left == right) {
    return node;
  }

  node.left = buildTree(inputArr, left, mid - 1);
  node.right = buildTree(inputArr, mid + 1, right);

  return node;
}

function searchKey (root, key) {
  if (!root) return false;
  let res = false;
  if (root.data < key) {
    res = searchKey(root.right, key);
  } else if (root.data > key) {
    res = searchKey(root.left, key);
  } else if (root.data === key) {
    res = true;
  }

  return res;
}

function inOrderTraversal (root) {
  if (!root) return null;
  inOrderTraversal(root.left);
  console.log(root.data);
  inOrderTraversal(root.right);
}

let root = buildTree([1, 2, 3, 4, 5, 6, 7], 0, 6);
//inOrderTraversal(root)

console.log(searchKey(root, 4));