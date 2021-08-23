class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack! last in, first out
// we add/remove from the top of a stack
// what's going to be the "top" of our stack here?

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // push(value) - adds the given value to the stack
    push(value) {
        var newNode = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    

    // pop() - removes the top value from stack and returns it
    pop() {
        if (this.head == null) {
            return null;
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
    ​
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
    ​
        return temp.value;
    }

    // top() - returns the top value without removing it
    top() {
        if (this.head == null) {
            return null;
        }
        return this.head.value;
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        if (this.head == null) {
            return null;
        }
        runner = this.head;
        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

    // size() - returns the size of the stack
    // bonus to think about: we can make this way faster - how?
    size() {
        var count = 1;
        if (this.head == null) {
            count = 0;
        }
        while (runner != null) {
            runner = runner.next;
            count++;
        }
        return count;
    }
        // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion

    isPalindrome() {
        
    }
}

var x = new SLLStack();

// console.log(x.pop());
// console.log(x.top());
// console.log(x.contains(1));
// console.log(x.isEmpty());
// console.log(x.size());

x.push(7);
x.push(3);
x.push(8);

// console.log(x.top());
// console.log(x.pop());
// console.log(x.contains(8));
// console.log(x.contains(7));
// console.log(x.isEmpty());
// console.log(x.size());