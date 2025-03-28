// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     enqueue(val) {
//         this.data.push(val);
//     }

//     dequeue() {
//         if (this.data.length === 0){
//             console.log("Queue is empty");
//             return
//         }
//         return this.data.shift();
//     }

//     peek() {
//         if (this.data.length === 0){
//             console.log("Queue is empty");
//             return
//         }
//         return this.data[0];
//     }

// }


// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.data);
// queue.dequeue();
// queue.dequeue();
// console.log(queue.data);
// console.log(queue.peek());


//==========================================================================
//=============================== Stack ====================================


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.head = null;
//         this.size = 0;
//     }

//     push(val) {
//         const newNode = new Node(val);
//         if (this.size === 0){
//             this.top = newNode;
//             this.head = newNode;
//         } else {
//             newNode.next = this.top;
//             this.top = newNode;
//         }
//         this.size++;
//     }
//     pop() {
//         if (this.size === 0){
//             console.log("Stack is empty");
//             return
//         }
//         this.top = this.top.next;
//         this.size--;
//     }
//     peek(){
//         if (this.size === 0){
//             console.log("Stack is empty");
//             return
//         }
//         return this.top.value;
//     }

//     display() {

//         if(this.size === 0){
//             console.log("Stack is empty");
//             return
//         }
//         let arr = [];
//         let current = this.top;
//         while (current) {
//             arr.push(current.value);
//             current = current.next;
//         }
//         console.log(arr.reverse());
//     }

// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.display();