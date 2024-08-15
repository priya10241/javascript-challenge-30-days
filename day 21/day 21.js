
// ACTIVITY 1 : TWO SUM PROBLEM

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i] + nums[j]==target){
                return [i,j];
            }
        }
    }
};

/* output :
nums = [3,2,4]
target = 6
Output = [1,2]

nums= [3,2,4]
target = 6
Output = [1,2]

nums = [3,3]
target =6
Output = [0,1]
*/



//ACTIVITY 2 : REVERSE INTEGER

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x<0){
        let res =  -(reverse(-x));
        if(res<-(Math.pow(2,31))){
            return 0;
        }
        return res;
    }
    let i = x
    let rev = 0
    while(i>0){
        let rem = i%10;
        rev = rev*10 + rem;
        i = parseInt(i/10);
        // console.log(rev);
    }
    if(rev>Math.pow(2,31)-1)
    {
        return 0;
    }
    return rev;
}

/* output : 
x = -123
Output = -321

x = 123
Output = 321

x = 1534236469
Output = 0
*/



//ACTIVITY 3 : PALINDROME NUMBER
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    i = x
    rev = 0
    while(i>0)
    {
        let rem = i%10;
        rev = rev * 10 + rem;
        i = parseInt(i/10);
    }
    if(rev==x)
    return true;
    return false;
};

/* output : 
x = 121
output : true
x = -121
output : false
x = 345
output : false
*/



// Activity 4 Merge Two Sorted Lists

//Task4 Merge two sorted lists on leetcode


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1==null){
        return list2;
    }
    else if(list2==null){
        return list1;
    }
    let temp1 = list1
    let temp2 = list2
    let head;
    if(temp1.val<temp2.val)
    {
        head = new ListNode(temp1.val);
        temp1 = temp1.next;
    }
    else{
        head = new ListNode(temp2.val);
        temp2 = temp2.next;
    }
    let temp = head
    while(temp1!=null && temp2!=null){
        if(temp1.val<=temp2.val){
            temp.next = new ListNode(temp1.val);
            temp1 = temp1.next;
            temp = temp.next;
        }
        else{
            temp.next = new ListNode(temp2.val);
            temp2 = temp2.next;
            temp = temp.next;
        }
    }
    if(temp1!=null)
    {
        temp.next = temp1;
    }
    else{
        temp.next = temp2;
    }
    return head
};

// Input
// list1 =
// [1,2,4]
// list2 =
// [1,3,4]
// Output
// [1,1,2,3,4,4]
// Expected
// [1,1,2,3,4,4]



// Activity 5 Valid Parenthesis

//Task5 Valid Parenthesis on leetcode


var isValid = function(s) {
    // Local stack variable
    let stack = [];
    let top = -1;

    function push(x) {
        stack[++top] = x;
    }

    function pop() {
        if (top == -1) {
            return null; // Return null if stack is empty
        } else {
            return stack[top--];
        }
    }

    function check(x) {
        if (x == '(' || x == '{' || x == '[') {
            return 0; // Opening bracket
        } else if (x == ')' || x == '}' || x == ']') {
            return 1; // Closing bracket
        } else {
            return 2; // Not a bracket (this case should never be hit)
        }
    }

    function check2(x) {
        if (x == '(' || x == ')') {
            return 1; // Parentheses
        } else if (x == '[' || x == ']') {
            return 2; // Square brackets
        } else if (x == '{' || x == '}') {
            return 3; // Curly brackets
        } else {
            return 0;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let k = check(s[i]);
        if (k == 0) {
            push(s[i]); // Push opening brackets onto the stack
        } else if (k == 1) {
            if (top == -1) {
                return false; // No opening bracket to match with
            } else {
                let y = pop();
                if (check2(s[i]) != check2(y)) {
                    return false; // Mismatched brackets
                }
            }
        }
    }

    return top == -1; // Valid if the stack is empty at the end
};

// Input
// s =
// "()"
// Output
// true
// Expected
// true