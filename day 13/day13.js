//ACTIVITY 1 : CREATING AND EXPORTING MODULES

//task 1  Create a module that exports a function to add two numbers. Import and use this module in another script

export function add(a,b){
    return a+b;
}

//Task 2 : Create a module that exports an object representing a person with preperties and methods. Import and use this module in another script.

export const Person = {
    name : "Akansha",
    age : 67,
    place : "Gurugram",
    getName(){
        return this.name;
    },
    setAge(y){
        this.age=y;
    }
}

//ACTIVITY 2 : NAMED AND DEFAULT EXPORTS

//Task3 Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// function fun1(){
//     console.log("I am first function");
// }

// function fun2(){
//     console.log("I am second function");
// }

// export{
//     fun1,
//     fun2
// };

//Task 4 : Create a module that exports a single function using default export. Import and use this function in another script.

// export default function newMul(a,b,c){
//     return a*b*c;
// }

//ACTIVITY 3 : IMPORTING COMPLETE MODULES

//Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties

export const subtract=(a,b)=>{
    return a-b;
}


//ACTIVITY 4 : USING THIRD PARTY MODULES

//Task 6 : Install a third party module (eg lodash) using npm. Import and use a function from this module in a script


