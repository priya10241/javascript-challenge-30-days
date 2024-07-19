// Activity 1 : Variable declaration
// task 1
var x = 30;
console.log(x); //output: 30

//task 2
let firstName = "Priya";
console.log(firstName); //output : "Priya"

//Activity 2 : Constant declaration
//task 3
const y = true;
console.log(y);  //output : true

//Activity 3: Data types
//task 4
let num=4;
let str="Society";
let b2=false;
const student = {
    Name:"NIT KKR",
    branch:"CS",
    year:2
};
const fruits=["apple","banana"];
console.log(typeof num);
console.log(typeof str);
console.log(typeof b2);
console.log(typeof student);
console.log(typeof fruits);

//activity 4: Reassigning Variables
//task 5
let x = 10;
console.log(x); //output: 10
x = 20;
console.log(x); //output: 20

//activity 5: Understanding const
//task 6
const n = 20;
console.log(n); //output: 20
n = 30;
console.log(n); //output : TypeError: Assignment to constant variable.


//feature 1
let nums=4;
let strng="Society";
let b3=false;
const studentInfo = {
    Name:"NIT KKR",
    branch:"CS",
    year:2
};
const fruitsName=["apple","banana"];
console.log(nums,typeof nums);
console.log(strng,typeof strng);
console.log(b3,typeof b3);
console.log(studentInfo,typeof studentInfo);
console.log(fruotsName,typeof fruitsName);
//output: 4 number
    //    Society string
    //    false boolean
    //    { Name: 'NIT KKR', branch: 'CS', year: 2 } object
    //    [ 'apple', 'banana' ] object


//feature 2
let number = 20;
console.log(number); //output : 20
number = 30;
console.log(number); //output: 30
const number2 = 20;
console.log(number); //output : 20
number2 = 30;
console.log(number); //output : TypeError: Assignment to constant variable.
