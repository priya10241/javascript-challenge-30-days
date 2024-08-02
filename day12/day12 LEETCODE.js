/* Question 1 : 
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

//SOLUTION : 
var compose = function(functions) {
    
    return function(x) {
        result = x
        for(let i=functions.length-1;i>=0;i--)
        {
            result = functions[i](result);
        }
        return result
    }
};

/* QUESTION 2 : 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/

//SOLUTION : 

var once = function(fn) {
    let count = 0;
    return function(...args){
        if(count==0){
            count+=1
            return fn(...args);
        }
    }
};
