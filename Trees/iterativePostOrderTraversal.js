// Date: 01-12-2021

// tree iterative traversals - postOrder


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

function postOrderTraversal (root) {
  if (!root) {
    return null;
  }

  let stack = [];

  stack.push({ node: root, state: 1 });
  while (stack.length) {
    let element = stack.pop();

    if (element.state === 1) {
      element.state++;

      stack.push(element);

      if (element.node.left) {
        stack.push({ node: element.node.left, state: 1 });
      }
    } else if (element.state === 2) {
      element.state++;
      stack.push(element);

      if (element.node.right) {
        stack.push({ node: element.node.right, state: 1 });
      }
    } else {
      // printing postorder traversal
      console.log(element.node.data);
    }
  }
}

let root = createTree();
postOrderTraversal(root);
