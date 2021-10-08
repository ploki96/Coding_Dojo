class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    addBack(value){
        if(this.head === null){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
            ++this.length;
        }else{
            let runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            let node = new Node(value);
            runner.next = node;
            node.prev = runner
            this.tail = node;
            ++this.length;
        }
    }
    addFront(value){
        if(this.head === null){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
            ++this.length;
        }else{
            let node = new Node(value);
            let runner = this.head;
            this.head = node;
            node.next = runner;
            runner.prev = node;
            ++this.length;
        }
    }
    
    removeBack(){
        if(this.head !== null){
            let runner = this.head;
            while(runner.next.next){
                runner = runner.next;
            }
            runner.next = null;
            this.tail = runner;
            --this.length;
        }
    }
    remFront(){
        if(this.head !== null){
            this.head = this.head.next;
            this.head.prev = null;
            --this.length;
        }
    }
    
    print(){
        let runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next;
        }
    }
    printBackwards(){
        let runner = this.tail;
        while(runner){
            console.log(runner.value);
            runner = runner.prev;
            
        }
    }   
    
    reverse(){
        let runner = this.head;
        let temp = this.head.next;

        while (runner != null){
            temp = runner.next;
            runner.next = runner.prev;
            runner.prev = temp;
            runner = runner.prev;
        }
        runner = this.tail;
        this.tail = this.head;
        this.head = runner;
        
    }

    

    recurseReverse(runner = this.head){
        let temp;
        if (runner == null){
            temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            return;
        } else if (runner != null) {
            temp = runner.next;
            runner.next = runner.prev;
            runner.prev = temp;
            runner = runner.prev;
            this.recurseReverse(runner);
        }
    }
}

newDLL = new DLL();
newDLL.addFront(4);
newDLL.addFront(6);
newDLL.addFront(9);
newDLL.addFront(12);
newDLL.addFront(2);
console.log("normal");
newDLL.print();
newDLL.recurseReverse();
console.log();
newDLL.print();




