//ACTIVITY 1 : LINKED LIST

//task 1 : Implement a node class to represent an element with properties values and next

class Node{
    constructor(value,next=null){
        this.value = value,
        this.next = next;
    }
}

let head = new Node(1,new Node(2,new Node(3,new Node(4))));


//Task 2 : Implement a linked list class with methods to add a node from end,remove a node and display aa nodes
class LinkedList{
    remove(head){
        let temp = head;
        while((temp.next).next != null){
            temp = temp.next;
        }
        temp.next = null;
    }
    add(head,val){
        let temp = head;
        if(temp.next==null){
            temp.next = new Node(val);
        }
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next =  new Node(val);
    }
    display(head){
        let temp=head;
        let str = ""
        while(temp!=null){
            str = str + temp.value + " ";
            temp = temp.next;
        }
        console.log(str);
    }
}


let l = new LinkedList();
l.display(head);  //1 2 3 4
l.add(head,7); 
l.display(head);  // 1 2 3 4 7
l.remove(head);
l.display(head);   // 1 2 3 4


//ACTIVITY 2 : STACK

// //Task 3 : Implement a stack class with push,,pop and peek.


class Stack{
    constructor(){
        this.top = -1
        this.stack = []
    }
    push(val){
        this.top +=1;
        this.stack[this.top] = val;
    }
    pop(){
        if(this.top==-1){
            console.log("stack is empty");
        }
        else{
            return this.stack[this.top--];
        }
    }
    peek(){
        console.log(this.stack[this.top]);
    }
    display(){
        let i=this.top;
        let str = ""
        while(i>=0){
            str = str + this.stack[i] + " ";
            i--;
        }
        console.log(str);
    }
}

let s = new Stack();
s.push(3);
s.push(6);
s.display();  // 3 6
s.push(9);
s.peek(); //9
s.display();  // 3 6 9
s.pop();
s.display(); // 3 6

// //Task 4 : Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off

let str1 = "abdefg";
let st = new Stack();
for(let i=0;i<str1.length;i++){
    st.push(str1[i]);
}
let rev="";
while(st.top!=-1){
    rev=rev + st.pop();
}

console.log(rev); //gfedba

// //ACTIVITY 3 : QUEUE

// //Task 5 : Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front (view the front element)

class Queue{
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queue = [];
    }
    enqueue(val){
        if(this.front==-1 && this.rear==-1){
            this.front = this.rear = 0;
        }
        else{
            this.rear +=1;
        }
        this.queue[this.rear] = val;
    }
    dequeue(){
        if(this.front==-1 && this.rear==-1){
            console.log("queue is empty");
        }
        else if(this.front==this.rear){
            let r = this.queue[this.rear];
            this.front = this.rear = -1;
            return r;
        }
        else{
            return this.queue[this.front++];
        }
    }
    display(){
        let i=this.front;
        let str="";
        while(i<=this.rear){
            str = str + this.queue[i] + " ";
            i++;
        }
        console.log(str);
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.display(); // 1 2 3
q.dequeue();
q.display();// 2 3

//Task 6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

let p = new Queue();
p.enqueue("page 1 ");
p.enqueue("page 2 ");
p.enqueue("page 3 ");
p.enqueue("page 4 ");
p.enqueue("page 5 ");
console.log("Printing page:");
p.display();

//output : Printing page:
//         page 1  page 2  page 3  page 4  page 5  


//ACTIVITY 4 : BINARY TREE

//Task7 : Implement a TreeNode class to represent a node in binary tree with properties value, left and right

class TreeNode{
    constructor(val,r=null,l=null){
        this.value = val;
        this.left = r;
        this.right = l;
    }
}

//Task 8 : Implement a BinaryTree class with methods for inserting values and performing in order traversal to display nodes

// const readlineSync = require('readline-sync');

class BinaryTree{
    create()
    {
        const x = parseInt(prompt('Enter data for node: '), 10);
        if (x==-1)
        {
            return null;
        }
        else
        {
            const node=new TreeNode(x);
            console.log(`The left node of ${x}`);
            node.left=this.create();
            console.log(`The right node of ${x}`);
            node.right=this.create();
            return node;
        }
    }
    inorder(r){
        let root = r;
        if(root==null){
            return;
        }
        else{
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
}

let b = new BinaryTree();
let r = b.create();
b.inorder(r);

/* output : 
4
3
6
9
8
2
12
14
*/