/*Question : 
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs.
 Instead it will return a cached value.
*/

//Solution : 
function memoize(fn) {
    const m = new Map();
    return function(...args) {
      const key = JSON.stringify(args);
      if(m.has(key)){
        return m.get(key);
      }
      else{
        let result = fn(...args);
        m.set(key,result);
        return result;
      }
    }
}