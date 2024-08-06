// ACTIVITY 1 : UNDERSTANDING CLOSURES

// Task 1: Write a function that returns another function, where the inner 
// function accesses a variable from the outer function's scope. Call the inner 
// function and log the result.

function outer(){
    let str = "I am an outer function";
    function inner(){
        console.log(str);
    }
    return inner;
}

let fn = outer();
fn();
//output : I am an outer function

// Task 2: Create a closure that maintains a private counter.Implement functions to 
// increment and get the current value of the counter.

function counter(){
    let counter = 0;
    function increase(){
        counter++;
    }
    function get(){
        return counter;
    }
    return{
        increase,
        get
    }
}

let c = counter();
c.increase();
console.log(c.get());
c.increase();
console.log(c.get());

//output : 1
//         2

//ACTIVITY 2 : PRACTICAL CLOSURES

// Task 3: Write a function that generates unique IDs. Use a closure to 
// keep track of the last generated ID and increment it with each call.

function track(){
    let lastId = 234;
    function generateId(){
        lastId = Math.floor(Math.random() * 1000);
    }
    function getId(){
        console.log(lastId);
    }
    return{
        generateId,
        getId
    }
}

let t = track();
t.generateId();
t.generateId();
t.getId();
t.generateId();
t.getId();

//output : 756
//         923

// Task 4: Create a closure that captures a user's name and returns a function 
// that greets the user by name.

function greetUser(name){
    function greet(){
        console.log(`Hello ${name}`);
    }
    greet();
}
greetUser('Priya');

//output : Hello Priya


//ACTIVITY 3 : CLOSURES IN LOOP

// Task 5: Write a loop that creates an array of functions. Each function 
// should log its index when called. Use a closure to ensure each function logs 
// the correct index.


function IndexPrint(arr){
    for(let i of arr){
        val = i;
        function LogIndex(){
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i]==val){
                    console.log(`Index of ${val} in ${arr} is ${i}`);
                    return;
                }
            }
        }
        LogIndex();
}
}

let arr = [1,2,3,4,5];
IndexPrint(arr);

/* output :
Index of 1 in 1,2,3,4,5 is 0
Index of 2 in 1,2,3,4,5 is 1
Index of 3 in 1,2,3,4,5 is 2
Index of 4 in 1,2,3,4,5 is 3
Index of 5 in 1,2,3,4,5 is 4
*/


// Task 6: Use closures to create a simple module for managing a collection of 
// items. Implement methods to add, remove, and list items.


function manage(){
    let list = [];
    function add(q){
        list.push(q);
    }
    function remove(q){
        let i = list.indexOf(q);
        list.splice(i,1);
    }
    function getList(){
        str= ""
        for(i of list)
        str = str + " " + i;
        console.log(str);
    }
    return{
        add,
        remove,
        getList
    }
}

let m = manage();
m.add('phone');
m.add('laptop');
m.getList();
m.add('tab');
m.getList();
m.remove('phone');
m.getList();


//output : phone laptop
//         phone laptop tab
//         laptop tab


//ACTIVITY 5 : MEMIOZATION

// Task 7: Write a function that memoizes the results of another function. Use 
// a closure to store the results of previous computations.

function mem(fn){
    cache = new Map();
    return function fun(...n){
        let key = JSON.stringify(n);
        if(cache.has(key)){
            return cache.get(key);
        }
        let res = fn(...n);
        cache.set(key,res);
        return res;
    }
}

let a = (arg)=>{
    return 2*arg;
}

let memoize = mem(a);
console.log(memoize(2));
console.log(memoize(4));
console.log(memoize(6));
console.log(memoize(9));
console.log(memoize(4));
console.log(memoize(6));

/* output : 
4
8
12
18
8
12
*/


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function mem(){
    let cache = {
        0:1,
        1:1
    }
    return function factorial(n){
        if(n in cache){
            return cache[n];
        }
        cache[n] = n * factorial(n-1);
        return cache[n];
    }
}

let memo = mem();
console.log(`factorial of 3 is ${memo(3)}`);
console.log(`factorial of 5 is ${memo(5)}`);
console.log(`factorial of 3 is ${memo(3)}`);
console.log(`factorial of 9 is ${memo(9)}`);

/* output : 
factorial of 3 is 6
factorial of 5 is 120
factorial of 3 is 6
factorial of 9 is 362880
*/