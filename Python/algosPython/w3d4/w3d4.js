class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// where should we add items? where are they removed from>

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // enqueue(value) - adds the given value to the queue (at the tail)
    enqueue(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    // dequeue() - removes the front (i.e. the head) value from queue and returns it
    dequeue() {
        if (this.head == null) {
            return null;
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.head
        this.head = this.head.next
        temp.next = null;

        return temp.value
    }

    // front() - returns the front value without removing it
    front() {
        if (this.head != null) {
        return this.head.value;
        }
        return undefined;
    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
    contains(target) {
        var runner = this.head;
        while (runner.value != null) {
            if(runner.value == target){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        if (this.head == null && this.tail == null) {
            return true;
        }
        return false;
    }

    // size() - returns the size of the queue
    size() {
        var runner = this.head;
        var count = 0;
        while (runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // method: compareQueues (odd-numbered group)
    // return true if the queues have the same values in the same order
    // false otherwise
    // important: this is a non-destructive operation!
    // do not modify either queue
    // compareQueues(queue2) {

    // }
    // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion

    isPalindrome() {
        if (this.head == this.tail) {
        runner = this.head;
        runner_temp = this.head;
        temp = this.tail;
        var count = 0;
        while (runner != null) {

        }

        }
    }
}

// compareQueues (even-numbered group)
// return true if the queues have the same values in the same order
// false otherwise
// important: this is a non-destructive operation!
// do not modify either queue
function compareQueues(queue1, queue2) {
    var runner1 = queue1.head;
    var runner2 = queue2.head;

    if (queue1.size() == queue2.size()) {
        while (runner1 != null) {
            if (runner1.value == runner2.value){
                runner1 = runner1.next;
                runner2 = runner2.next;
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
}


// test your queue implementation here!

var queue_A = new SLLQueue();

var queue_B = new SLLQueue();

var queue_C = new SLLQueue();

var queue_D = new SLLQueue();

queue_A.enqueue(5);
queue_A.enqueue(3);
queue_A.enqueue(7);
queue_A.enqueue(9);
queue_A.enqueue(15);
queue_A.enqueue(15);
queue_B.enqueue(5);
queue_B.enqueue(3);
queue_B.enqueue(7);
queue_B.enqueue(9);
queue_B.enqueue(15);
queue_B.enqueue(135);

// console.log(compareQueues(queue_A, queue_B));
console.log(compareQueues(queue_B, queue_A));