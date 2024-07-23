//ACTIVITY 1 : FUNCTION DECLARATION

//task 1 : Function to check if a number is even or odd

function isEven(a) {  //This function check whether number is even or not
    if(a%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let num = 5;
if(isEven(num)){   //if function returns True ,then this statement will get execute
    console.log(number,"is even");
}
else{
    console.log(number,"is odd");
}

//output : 5 is odd

//task 2 : function to find square of a number

function square(a){
    return a*a;  //return the square of input number
}

let a = 3;
console.log("square of",a,"is",square(3));   //print the square of number

// output : square of 3 is 9


//ACTIVITY 2 : FUNCTION EXPRESSION

//task 3 : funtion to find maximum of two numbers

function findMax(a,b){
    if(a>=b){
        return a;
    }
    return b;
}

let a1 = 25;
let a2 = 37;
console.log("maximum of",a1,"and",a2,"is",findMax(a1,a2));

//output : maximum of 25 and 37 is 37

//task 4 : function to concatenate two strings

function concatenate(str1,str2){
    return str1 + str2;
}
let str1 = "Akansha";
let str2 = " Sharma";
let result = concatenate(str1,str2);
console.log("concatenated string is :",result);

// output : concatenated string is : Akansha Sharma


//ACTIVITY 3 : ARROW FUNCTIONS

//task 5 : arrow function to find sum of two numbers

const findSum = (a,b) => {
    return a+b;
}
let b1 = 6;
let b2 = 7;
console.log("sum of",b1,"and",b2,"is :",findSum(b1,b2));

//output : sum of 6 and 7 is : 13;

//task 6 : arrow function to check whether a string contain a perticular character or not

const findChar = (str1,ch) =>{
    let len = str1.length;
    for(let i=0;i<len;i++){
        if(str1[i]==ch){
            return true;
        }
    }
    return false;
}

let ch = 'a';
let strng1 = 'table';
if(findChar(strng1,ch)){
    console.log("character",ch,"is found in string",strng1);
}
else{
    console.log("character",ch,"is not found in string",strng1);
}

//output : character a is found in string table



// ACTIVITY 4 : FUNCTION PARAMETER AND DEFAULT VALUES

//task 7 : function takes two parameters and find product and set default value of second parameter

function product(a,b=1){
    return a*b;
}
let c1 = 7;
console.log("On setting default value of second parameter as 1,the product of",c1,"is :",product(7));

//output : On setting default value of second parameter as 1,the product of 7 is : 7


//task 8 : function that takes person name and age and return greeting

const greet = (name,age=18) =>{
    console.log("Hello, my name is",name,"and I am",age,"years old.");
};

let nam = "Akansha";
greet(nam);

//output : Hello, my name is Akansha and I am 18 years old.


//ACTIVITY 5 : HIGHER ORDER FUNCTIONS

//task 9 : function that take a function and number as perimeter and call that function as many times

const fun = () =>{  //this function will pass as an argument in other function
    console.log("I am a function and i am passed as a perimeter in other function");
}

const higherFunction = (number,func) =>{  //higher order function taking a function as a perimeter
    for(let i=1;i<=number;i++){
        func();
    }
}

let num2 = 5;
higherFunction(num2,fun);

/*output : 
I am a function and i am passed as a perimeter in other function
I am a function and i am passed as a perimeter in other function
I am a function and i am passed as a perimeter in other function
I am a function and i am passed as a perimeter in other function
I am a function and i am passed as a perimeter in other function
*/


//task 10 : function that takes two function as perimeter and apply second function on result of first function

function finddouble(a){
    return 2*a;
}
function findSquare(b){
    return b*b;
}

const highOrder = (num,func1,func2) =>{
    res1 = func1(num);
    res2 = func2(res1);
    return res2;
};

let n = 6;
let resultFinal = highOrder(n,finddouble,findSquare);

console.log("After applying higher order function on ",n,"which takes two function passed as a perimeter first function double the number and second will find square of it,the result is :",resultFinal);

//output : After applying higher order function on  6 which takes two function passed as a perimeter first function double the number and second will find square of it,the result is : 144


