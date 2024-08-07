//ACTIVITY 1 : BASIC RECURSION 

//task 1 : Write a recursive function to calculate factorial of a number.Log the result for a few test cases.

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n* factorial(n-1);
}

console.log(`factorial of 6 is ${factorial(6)}`);
console.log(`factorial of 0 is ${factorial(0)}`);
console.log(`factorial of 9 is ${factorial(9)}`);

/* output : 
factorial of 6 is 720
factorial of 0 is 1
factorial of 9 is 362880
*/

//Task 2 : Write a recursive function to calculate nth fibonacci number.Log the result for a few test cases.

function fibbonacci(n){
    if(n==1 || n==2){
        return 1;
    }
    return fibbonacci(n-1) + fibbonacci(n-2);
}

console.log(`Element 1 of fibbonacci series is ${fibbonacci(1)}`);
console.log(`Element 5 of fibbonacci series is ${fibbonacci(5)}`);
console.log(`Element 8 of fibbonacci series is ${fibbonacci(8)}`);

/* output :
Element 1 of fibbonacci series is 1
Element 5 of fibbonacci series is 5
Element 8 of fibbonacci series is 21
*/

//ACTIVITY 2 : RECURSION WITH ARRAYS

//Task 3 : Write a recursive function to find sum of all elements in an array. Log the result for a few test cases.

function findSum(arr,index){
    if(index==arr.length){
        return 0;
    }
    return arr[index] + findSum(arr,index+1);
}

let arr = [2,5,8,3,4];
console.log(`sum of array is ${findSum(arr,0)}`);

//output : sum of array is 22

//Task 4 : Write a recursive function to find maximum element in an array. Log the result for a few test cases.

function findMax(arr,index,max){
    if(arr.length==0){
        return undefined;
    }
    if(index==arr.length){
        return max;
    }
    if(max<arr[index]){
        max=arr[index];
    }
    return findMax(arr,index+1,max);
}

let arr1=[7,23,65,4,1,76,9,8];
console.log(`Maximum element in array ${arr1} is ${findMax(arr1,0,arr1[0])}`);

//output : Maximum element in array 7,23,65,4,1,76,9,8 is 76

let arr2=[];
console.log(`Maximum element in empty array is ${findMax(arr2,0,0)}`);

//output : Maximum element in empty array is undefined

//ACTIVITY 3 : STRING MANIPULATION WITH RECURSION

//Task 5 : Write a recursive function to reverse a string.Log the result for a few test cases.

function reverseString(s,id){
    if(s.length==0){
        return s;
    }
    if(id==s.length-1){
        return s[id];
    }
    return reverseString(s,id+1) + s[id];
}

let book = "Python";
console.log(`Reverse of ${book} is ${reverseString(book,0)}`);
//output : Reverse of Python is nohtyP

let e = "";
console.log(`Reverse of empty string is "${reverseString(e,0)}"`);
//output : Reverse of empty string is ""


//Task 6 : Write a recursive function to check if a string is palindrome.Log the result for a few test cases.
function checkPalindrome(s,i,j){
    if(s==""){
        return true;
    }
    else if(i>=j){
        return true;
    }
    else if(s[i]==s[j]){
        return checkPalindrome(s,i+1,j-1);
    }
    else if(s[i]!=s[j]){
        return false
    }
}

console.log(`Status of check palindrome of string abcba is ${checkPalindrome('abcba',0,4)}`);
console.log(`Status of check palindrome of string abcdba is ${checkPalindrome('abcba',0,5)}`);

//output : 
//Status of check palindrome of string abcba is true
//Status of check palindrome of string abcdba is false


//ACTIVITY 4 : RECURSIVE SEARCH

//Task 7 : Write a recursive function to perform binary search on a sorted array. Log the index of target element for a few test cases.

function binarySearch(arr,first,last,key){
    if(first<=last)
    {
        let mid = Math.floor((first+last)/2);
        if(arr[mid]==key){
            return true;
        }
        else if(arr[mid]>key){
            return binarySearch(arr,first,mid-1,key);
        }
        else{
            return binarySearch(arr,mid+1,last,key);
        }
    }
    return false;
}

console.log(binarySearch([1,2,3,4,5],0,4,4));  //true
console.log(binarySearch([1,2,3,4,5],0,4,7)); //false
console.log(binarySearch([7,9,12,15],0,3,7)); //true


//Task 8 : Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.

function count(arr,f,c,key){
    if(f>=arr.length){
        return c;
    }
    else if(arr[f]==key){
        return count(arr,f+1,c+1,key);
    }
    else{
        return count(arr,f+1,c,key);
    }
}

console.log(count([2,4,6,3,4,8,6,4,1,4],0,0,4));  //4
console.log(count([2,4,6,3,4,8,6,4,1,4],0,0,9));  //0
console.log(count([2,4,6,6,4,6,4],0,0,6));  //3

//ACTIVITY 5 : TREE TRAVERSAL

//Task 9 : Write a recursive function to perform an inorder traversal of a binary tree. Log the nodes as they are visited.

function inorder(root){
    if(root==null){
        return;
    }
    else{
        inorder(root.left);
        console.log(root.val);
        inorder(root.right);
    }
}

class node{
    constructor(v,r=null,l=null){
    this.val = v;
    this.right =r;
    this.left = l;
    }
}

const root = new node(10,
    new node(20,new node(14),new node(30)),
    new node(19,new node(9),new node(8))
);
inorder(root);

/* output : 
8
19
9
10
30
20
14
*/

//Task 10 : Write a recursive function to log the depth of a binary tree.
function depth(root){
    if(root==null){
        return 0;
    }
    else{
        let r = depth(root.right);
        let l = depth(root.left);
        if(l>=r){
            return 1 + l;
        }
        return 1+r;
    }
}

console.log(depth(root)); //3