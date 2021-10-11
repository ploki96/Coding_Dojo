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
}

let newBST = new BST();
newBST.addNode(7);
newBST.addNode(5);
newBST.addNode(8);
newBST.addNode(4);
console.log(newBST.findMax());
console.log(newBST.findMin());
