//ACTIVITY 1 : SORTING ALGORITHMS

//task 1 : Implement the bubble sort algorithm to sort the array elements in ascending order and log the array
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

let arr = [2,8,4,9,3,1,6,23,7];
bubbleSort(arr);
console.log(`sorted array is ${arr}`);
//output : sorted array is 1,2,3,4,6,7,8,9,23


//task 2 : Implement the selection sort algorithm to sort the array elements in ascending order and log the array

function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}

let arr2 = [20,19,18,17,2,4,5];
SelectionSort(arr2);
console.log(`sorted array is ${arr2}`);
//output : sorted array is 2,4,5,17,18,19,20


//task 3 : Implement the quick sort algorithm to sort the array elements in ascending order and log the array
function Quick(arr,lb,up){
    let start = lb;
    let end = up;
    let pivot = arr[lb];
    while(start<end){
        while(arr[start]<=pivot)
            start++;
        while(arr[end]>pivot)
            end--;
        if(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }
    let temp = arr[lb];
    arr[lb] = arr[end];
    arr[end] = temp;
    return end;
}
function quickSort(arr,lb,up){
    if(lb<up){
        let loc = Quick(arr,lb,up);
        quickSort(arr,lb,loc);
        quickSort(arr,loc+1,up);
    }
}

let arr3 = [23,45,87,12,21,54,6];
quickSort(arr3,0,arr3.length-1);
console.log(`sorted array is ${arr3}`);

//output : sorted array is 6,12,21,23,45,54,87


//ACTIVITY 2 : SEARCHING ALGORITHMS


//task 4 : implement the linear search algorithm to find the index of target value in array and log the index to console
function LinearSearch(arr,key){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==key){
            return i;
        }
    }
    return -1;
}

let arr4 = [8,6,4,2,9,5,7];
let key = 9;
console.log(LinearSearch(arr4,key));

//output : 4

//task 5 : implement the binary search algorithm to find the index of target value in sorted array and log the index to console

function BinarySearch(arr,key){
    start = 0
    end = arr.length - 1
    while(start<=end){
        let mid = (start+end)/2;
        if(arr[mid]==key)
            return mid;
        else if(arr[mid]>key){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return -1;
}

let arr5 = [3,5,6,7,8,9]
let k = 4;
console.log(BinarySearch(arr4,k));

//output : -1

//STRING ALGORITHMS

//task 6 : write a function to count the occurence of each character of a string and log the characters count
function countOccurence(str,ch){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==ch)
            count++;
    }
    return count;
}

let str = "abcbdhbscabssabccbaa";
let l = "";
for(let i=0;i<str.length;i++)
{
    if(l.indexOf(str[i])==-1){
        let oc = countOccurence(str,str[i]);
        console.log(`occurence of ${str[i]} in ${str} is ${oc}`);
        l = l + str[i];
    }
}

/*output : occurence of a in abcbdhbscabssabccbaa is 5
occurence of b in abcbdhbscabssabccbaa is 6
occurence of c in abcbdhbscabssabccbaa is 4
occurence of d in abcbdhbscabssabccbaa is 1
occurence of h in abcbdhbscabssabccbaa is 1
occurence of s in abcbdhbscabssabccbaa is 3
*/


//task 7 : write a function to find the longest substring of a string without repeating characters 
//and log the length of substring to console
function findLongestSubstring(str){
    let max = 0;
    for(let i=0;i<str.length;i++)
    {
        sub = "";
        count = 0;
        for(let j=i;j<str.length;j++)
        {
            if(sub.indexOf(str[j])==-1)
            {
                sub = sub + str[j];
                count+=1;
            }
        }
        if(count>max){
            max = count;
        }
    }
    return max;
}

console.log(`length of longest substring in string ${str} is ${findLongestSubstring(str)}`);

//output : length of longest substring in string abcbdhbscabssabccbaa is 6

//ACTIVITY 4 : ARRAY ALGORITHMS


//task 8 : write a function to rotate an array by k positions and log the rotated array
function rotateArray(arr,k){
    k = k % arr.length;
    if(k==0)
        return arr;
    else{
        let a = arr.splice(0,1);
        arr.push(a);
        return rotateArray(arr,k-1);
    }
}

let arr6 = rotateArray([1,2,3,4,5,6],3);
console.log(`rotated array of [[1,2,3,4,5,6] is ${arr6}`);

//output : rotated array of [[1,2,3,4,5,6] is 4,5,6,1,2,3

//task 9 : write a function to merge two sorted array to one sorted array and log the merged array

function merge(arr1,arr2){
    let k=0;
    let i=0;
    let j=0;
    let arr = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else{
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

let a1 = [2,4,6,8,10];
let a2 = [1,3,5,7,9,11,13];
let afinal = merge(a1,a2);
console.log(`merged array is ${afinal}`);

//output : merged array is 1,2,3,4,5,6,7,8,9,10,11,13