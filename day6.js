//ACTIVITY 1 : ARRAY CREATION AND ACCESS

//task 1 : create array of numbers from 1-5 and log the array to console

let arr = [1,2,3,4,5];
console.log("array having numbers from 1-5 is  :",arr);

//output : array having numbers from 1-5 is  : [1,2,3,4,5]

//task 2 : access first and last element of array and log them to console

let arr2 = [2,5,7,3,4];
console.log("first element of array is : ",arr2[0]);   //index of first element of array is zero
let lastIndex = arr2.length - 1;
console.log("last element of array is :",arr2[lastIndex]);   //print the last element of array 

//output : first element of array is :  2
//         last element of array is : 4



//ACTIVITY 2 : ARRAY METHODS

//task 3 : push method to add new element to array and log the new array to console

let arr3 = [2,7,5,3,9,1];
console.log("initially,array is:",arr3);
arr3.push(6);
console.log("updated array after adding 6 to last of array is :",arr3);

//output : updated array after adding 6 to last is : [2, 7, 5, 3, 9, 1, 6]

//task 4 : pop method to remove last element from array and log the updated array to console

let arr4 = [3,9,45,12];
console.log("initially,array is:",arr4);
let r = arr4.pop();
console.log("updated array after removing last element is : ",arr4," and last element removed is",r);


//output : initially,array is: [ 3, 9, 45, 12 ]
//         updated array after removing last element is :  [ 3, 9, 45 ]  and last element removed is 12


//task 5 : shift method to remove first element from array and log the updated array to console

let arr5 = [5,12,6,34,9];
console.log("initially,array is:",arr5);
arr5.shift()
console.log("updated array after removing first element using shift method is : ",arr5);

//output : initially,array is: [ 5, 12, 6, 34, 9 ]
//         updated array after removing first element is :  [ 12, 6, 34, 9 ]

//task 6 : unshift method to add element to beginning and log new array to console

console.log("initially,array is:",arr5);
arr5.unshift(89);
console.log("updated array after adding new element using unshift method is : ",arr5);

//output : initially,array is: [ 12, 6, 34, 9 ]
//         updated array after adding new element using unshift method is :  [ 89, 12, 6, 34, 9 ]


// ACTIVITY 3 : ARRAY METHODS 

//task 7 : use map to create a new array in which every element get double

let arr6 = [8,7,6,5,4,3,2];
console.log("Original array is:",arr6);
let arr7 = arr6.map((a)=>{
    return 2*a;
});
console.log("new array using map method is :",arr7);


//output : Original array is: [ 8, 7, 6, 5, 4, 3, 2]
//         new array using map method is : [ 16, 14, 12, 10, 8,  6,  4]


//task 8 : use filter to create a new array which contains only even number of previous array

let arr8 = [23,24,25,26,27,28,90,21];
console.log("Original array is:",arr8);
let arr9 = arr8.filter((a)=>{
    return a%2==0;
});
console.log("new array using filter method is :",arr9);

//output : Original array is: [ 23, 24, 25, 26, 27, 28, 90, 21]
//         new array using filter method is : [ 24, 26, 28, 90]


//task 9 : use reduce to sum all elements of array and log it to console

console.log("Original array is:",arr8);
let a= 0;
let sumOfArray = arr8.reduce((a,b)=>{
    return a+b;
});
console.log("sum of array is:",sumOfArray);

//output : Original array is: [ 23, 24, 25, 26, 27, 28, 90, 21]
//         sum of array is: 264


//ACTIVITY 4 : ARRAY ITERATION

//task 10 : for loop to iterate the array 

let arr11 = [8,5,1,3,9,7,2];
console.log("Elements of array are :");
for(let i=0;i<arr11.length;i++){
    console.log(arr11[i]);
}

/* output : Elements of array are :
8
5
1
3
9
7
2
*/


//task 11 : forEach method to iterate over the array

let arr12 = [34,32,15,37,98,76];
console.log("Elements of array are :");
arr12.forEach((a)=>{
    console.log(a);
});

/* ouput : Elements of array are :
34
32
15
37
98
76
*/

//ACTIVITY 5 : MULTIDIMENSIONAL ARRAY

//task 12 : create a 2D array and log array to console

let arrTwoD = [[1,2,3],[4,5,6],[7,8,9]];
console.log("two D array is :");
for(let i=0;i<arrTwoD.length;i++){
    str=""
    for(let j=0;j<arrTwoD[0].length;j++){
        str = str + " " + arrTwoD[i][j] + " ";
    }
    console.log(str);
}

/* output : 
two D array is :
 1  2  3 
 4  5  6 
 7  8  9 
 */


 //task 13 : access and log a specific element

 console.log("element in second row and second column in array",arrTwoD,"is :",arrTwoD[1][1]);

 //output : element in second row and second column in array [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] is : 5