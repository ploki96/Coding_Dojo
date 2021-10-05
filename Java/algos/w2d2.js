class Node{
    constructor(val){
        this.val = val;
        this.next = null; // node (.val, .next)
        //THIS IS NEW
        this.child = null; // SLL (.head)
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //populates each node with a random amount of children from 0 to 4
    populateChildren(){

        let runner = this.head;

        while(runner !== null){
            let numChildren = Math.floor(Math.random() * 5);
            if(numChildren !== 0){
                let childList = new SLL();
                for(let i = 0; i < numChildren; ++i){
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }

    }
    flattenChildren(){
        let runner = this.head;

        while (runner){
            let temp = runner.next;
            if (runner.child != null){
                runner.next = runner.child.head;
                let childRunner = runner.child.head;
                while (childRunner.next != null) {
                    childRunner = childRunner.next;
                }
                childRunner.next = temp;
                runner.child = null;
            }
            runner = temp;
        }
    }
    

    printMeWithChildren(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val}`;
            if(runner.child){
                returnStr += "(";
                let runner2 = runner.child.head;
                while(runner2 !== null){
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

let newSLL = new SLL();
newSLL.addToFront(7);
newSLL.addToFront(4);
newSLL.addToFront(8);
newSLL.populateChildren();
newSLL.printMeWithChildren();
newSLL.flattenChildren();
newSLL.printMeWithChildren();
