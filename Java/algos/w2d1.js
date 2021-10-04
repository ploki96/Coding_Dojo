class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }

reverseList() {
//Insert Code Here
//first node is last node
    let current = this.head;
    let previous = null;
    let temp = this.head.next;
    let end = this.tail;

    while (current != null){
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    this.head = previous;

    }
}
var newsll = new SLL();
newsll.addToFront(7);
newsll.addToFront(9);
newsll.addToFront(2);
newsll.addToFront(5);
newsll.addToFront(1);
newsll.addToFront(8);
newsll.display();
newsll.reverseList();
newsll.display();
