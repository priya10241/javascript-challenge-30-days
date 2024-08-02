//ACTIVITY 1 :Basic Error Handling with try and catch

//Task1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console
// const getHigh = (x)=>{
// try{
//     if(x>10) throw "too high number";
//     else throw "low number";
// }
// catch(err){
//     console.log(err);
// }
// }
// getHigh(16);

//output : too high number

//Task 2 : Create a function that divides two numbers and throws an error if denominator is zero. Use a try-catch block to handle this error

// function isValid(a,b){
//     try{
//         if(b==0) throw "not a valid division";
//     }
//     catch(err){
//         console.log(err);
//     }
// };
// isValid(2,0);

//output : not a valid division

// ACTIVITY 2 : Finally Block

//Task 3 : Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe th execution flow

// let n = 20;
// try{
//     console.log("executing in try block");
// }
// catch(err){
//     console.log("executing in catch block");
//     console.log(err);
// }
// finally{
//     console.log("executing in finally block");
// }

//output : executing in try block
//         executing in finally block


// ACTIVITY 3 : Custom Error Objects

//Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using try-catch block

// class ComparisionForGreaterError extends Error{
//     constructor(msg){
//         super(msg);
//     }
// }

// const checkGreater=(a,b)=>{
// try{
//     if(a<b){
//         throw new ComparisionForGreaterError("first is not greater than second");
//     }
// }
// catch(msg){
//     console.log(msg);
// };
// }

// checkGreater(2,4);

//output : Error: first is not greater than second

//Task 5 : Write a function that validates user input (eg checking if a string is not empty) and thows a custom error if validation fails. Handle the custom error using a try-catch block

// class ValidationError extends Error{
//     constructor(msg){
//         super(msg);
//         this.name = "ValidationError";
//     }
// }
// const checkValid = (s)=>{
//     try{
//         if(s == "" || s.trim()=='')
//             throw new ValidationError("empty string found!");
//         else if(s[0]>='a' && s[0]<='z'){
//             throw new ValidationError("first character connot be small");
//         }
//         else if(s.length>20){
//             throw new ValidationError("string is too large");
//         }
//         else
//         console.log("Valid String");
//     }
//     catch(err){
//         console.log(`${err.name} : ${err.message}`);
//     }
// }

// checkValid("");
// checkValid("Dfjhreuihtesjdkfheoiefhoiehdnkjfrh");
// checkValid("hello");
// checkValid("Hello");

/* output : 
ValidationError : empty string found!
ValidationError : string is too large
ValidationError : first character connot be small
Valid String
*/

// ACTIVITY 4 : Error Handling in Promises

//Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

const randomFunction = ()=>{
    return new Promise((resolve,reject)=>{
        let r = Math.floor(Math.random() * 10)
        if(r<5)
            resolve("executed successfully");
        else{
            reject("something went wrong");
        }
    })
}
try{
randomFunction().then((msg)=>{
    console.log(msg);
});
randomFunction().catch((err)=>{
    console.log(err,'in promise');
    throw err;
});
}
catch(err){
    console.log(err);
}