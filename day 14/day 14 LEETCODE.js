// question 1 : Given a positive integer millis, 
//write an asynchronous function that sleeps for millis milliseconds. It can resolve any value


//Solution : 
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis)},millis);
        
    });
}


//question 2 : Given an asynchronous function fn and a time t in milliseconds, 
// return a new time limited version of the input function. fn takes arguments provided to the time limited function.

//Solution : 
var timeLimit = function(fn, t) {
    return async function(...args) {

        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result)=>{
                resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };
};