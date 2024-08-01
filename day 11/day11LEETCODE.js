//LEETCODE 1 : Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

//SLOUTION : 
var filter = function(arr, fn) {
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            arr2.push(arr[i]);
        }
    }
    return arr2;
};

//LEETCODE 2 : Given an integer array nums, a reducer function fn, 
//and an initial value init, return the final result obtained by executing the fn 
//function on each element of the array, sequentially, 
//passing in the return value from the calculation on the preceding element.

//SOLUTION : 
var reduce = function(nums, fn, init) {
    let val = init;
    for(let i=0;i<nums.length;i++){
        val = fn(val,nums[i]);
    }
    return val;
};