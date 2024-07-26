//ACTIVITY 1 : TEMPLATE LITERALS

//task 1 :  create a string using template literals that includes person's name and age
let personName="Akansha";
let personAge=26;
let personInfo=`Hi ${personName}, you are ${personAge} years old.`;
console.log(personInfo);
// output : Hi Akansha, you are 26 years old.


//task 2 : multi-line string using template literals
let str=`this
fruit is good
for health`;
console.log(str);
// output : 
// this
// fruit is good
// for health

//ACTIVITY 2 : DESTRUCTURING

//task 3 : array destructuring to extract 1st and 2nd element from array of numbers
const arr1=[1,2,3,4,5];
let [first,second,...args1]=arr1;
console.log(`First element : ${first} ; Second element : ${second}`);
// output : First element : 1 ; Second element : 2


//task 4 : object destructuring to extract title and author from a book object
const book={
    nameBook:"Peace at every step",
    author:"Thich Nhat Hanh",
    price:160,
    year : 1990,
};
const {nameBook,author,...args2}=book;
console.log(nameBook);
console.log(author);
//output:
// Peace at every step
// Thich Nhat Hanh

//ACTIVITY 3 : SPREAD AND REST OPERATORS

//task 5 : Use the spread operator to create a new array that includes all 
// elements of existing array and additional elements. Log the new array to the console.
const arr12=[1,2,3];
const newArray = [...arr12,6,7,8];
console.log("Original array is :",arr12);
console.log("Updated array :",newArray);
// output:
// Original array is : 1,2,3
// Updated array : 1,2,3,6,7,8


//task 6 :  use rest operator in a function to accept any number of arguments
// sum them and return the result
function calculateSum(...args3)
{
    let sum=0;
    for(let i of args3)
    {
        sum = sum + i;
    }
    return sum;
}

let result=calculateSum(4,5,1,2,3);
console.log(result);
//output : 15



//ACTIVITY 4 : DEFAULT PARAMETERS

//task 7 : function that takes 2 parameters & returns their product with 
// second parameter having default value 1. call this function with the second 
// parameter

function multiply(a,b=1)
{
    return a*b;
}
console.log(multiply(9,8));
//output : 72

//ACTIVITY 5 : ENHANCED OBJECT LITERAL

//task 8 : use enhanced object literals to create an object with methods and properties
let gear=3;
let speed=42;
const library={
    libName,
    year,
    setName(n)
    {
        this.libName=n;
    },
    setYear(y)
    {
        this.year=y;
    }
}
library.setName("National Library of India");
library.setYear(1987);
console.log(library);
//output
// {
//     name : "national Library of India"
//     year: 1987,
//     setName: [Function: setName],
//     setGYear: [Function: setYear]
// }


//task 9 : create an object with computed property names based on variables
let var1="firstName";
let var2="lastName";
const obj={
    [var1]:"Akansha",
    [var2]:"Sharma"
};
console.log(obj);
//output : { firstName: 'Akansha', lastName: 'Sharma' }