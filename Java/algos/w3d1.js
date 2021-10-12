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

    findMin() {
        var runner = this.root;
        while (runner.left != null){
            runner = runner.left;
        }
        return runner.value;
    }

    findMax() {
        var runner = this.root;
        while (runner.right != null){
            runner = runner.right;
        }
        return runner.value;
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
}

let newBST = new BST();
newBST.addNode(7);
newBST.addNode(5);
newBST.addNode(8);
newBST.addNode(4);
newBST.addNode(1);
// console.log(newBST.findMax());
// console.log(newBST.findMin());
console.log(newBST.contains(1));
console.log(newBST.contains(8));
console.log(newBST.contains(2));
console.log(newBST.size());

