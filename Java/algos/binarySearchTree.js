class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    addNode(value) {
        if (this.root == null){
            this.root = new BSTNode(value)
        } else {
            let runner = this.root
            while (runner) {
                if (value > runner.value){
                    if (runner.right != null)
                        runner = runner.right;
                    else {
                        runner.right = new BSTNode(value);
                        return;
                    }
                    
                } else if (value < runner.value) {
                    if (runner.left != null)
                        runner = runner.left;
                    else {
                        runner.left = new BSTNode(value);
                        return;
                    }
                }
            }
            if (value > runner.value){
                runner.right = new BSTNode(value);
            } else runner.left = new BSTNode(value);

        } 
    }

    findMin(node = this.root) {
        var runner = node;
        while (runner.left != null){
            runner = runner.left;
        }
        return runner;
    }

    findMax(node = this.root) {
        var runner = node;
        while (runner.right != null){
            runner = runner.right;
        }
        return runner;
    }

    size(node = this.root) {
        if (node == null) return 0;
        // if (node) {
            return 1 + this.size(node.left) + this.size(node.right);
        // }

    }

    contains(value) {
        var runner = this.root;
        while (runner != null) {
            if (runner.value === value) {
                return true;
            } else if (runner.value > value) {
                runner = runner.left;
            } else {
                runner = runner.right;
            }
        }
        return false;
    }

    maxHeight(node = this.root) {
        if (node == null) return 0;
        
        let leftMax = this.maxHeight(node.left) + 1;
        let rightMax = this.maxHeight(node.right) + 1;

        if (leftMax > rightMax) {
            return leftMax;
        } else {
            return rightMax;
        }
        
    }

    isBalanced() {
        let leftSide = this.maxHeight(this.root.left);
        let rightSide = this.maxHeight(this.root.right);

        if (Math.abs(leftSide - rightSide)> 1){
            return false;
        } else {
            return true;
        }
    }

    deleteNode(value, node = this.root) {
        if (node == null) {
            return node;
        }
        if (node.value > value){
            node.left = this.deleteNode(value, node.left);
            console.log(node.left.value)
        } else if (node.value < value) {
            node.right = this.deleteNode(value, node.right);
        } else {
            if (node.left == null && node.right == null){
                node == null;
            } else if (node.left && node.right) {
                let pred = this.findMax(node.left);
                node.left = this.deleteNode(pred.value, node.left);
            } else {
                let child
                if (node.left) {
                    child = node.left
                    
                } else {
                    child = node.right
                }
                node = child;
            }
        }
        return node;
    }
}


    

let newBST = new BST();
newBST.addNode(7);
newBST.addNode(5);
newBST.addNode(8);
newBST.addNode(4);
newBST.addNode(1);
// console.log(newBST.findMax());
// console.log(newBST.findMin());
// console.log(newBST.contains(1));
// console.log(newBST.contains(8));
// console.log(newBST.contains(2));

console.log(newBST.deleteNode(5));
console.log(newBST.contains(5))

