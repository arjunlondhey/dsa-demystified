// Date: 01-12-2021

// leftClonedTree


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
    11        10
  12            14
                  15
*/
function createTree () {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  let lt1 = root.left;
  let rt1 = root.right;

  lt1.left = new TreeNode(4);
  lt1.right = new TreeNode(5);


  lt2 = lt1.left;

  lt2.left = new TreeNode(8);
  lt2.left.left = new TreeNode(11);
  lt2.left.left.left = new TreeNode(12);
  lt2.right = new TreeNode(9);
  lt2.right.right = new TreeNode(10);
  lt2.right.right.right = new TreeNode(14);
  lt2.right.right.right.right = new TreeNode(15);

  return root;
}

let maxDiam = 0;
function diameter (root) {
  if (!root) {
    return 0;
  }

  let lcr = diameter(root.left);
  let rcr = diameter(root.right);

  let height = 1 + Math.max(lcr, rcr);

  let diam = 1 + lcr + rcr;

  if (diam > maxDiam) {
    maxDiam = diam;
  }

  return height;
}


let root = createTree();
diameter(root);

console.log(maxDiam);