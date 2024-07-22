//ACTIVITY 1 : FOR LOOP

//task 1 : Program to print numbers from 1-10 using for loop
for(let i=1;i<=10;i++){ //here i is initialised with 1 and each time its value get increased by 1 until it reaches 10
    console.log(i);
}

/*output:
1
2
3
4
5
6
7
8
9
10  */

//task 2 : Progam to print multiplication table of 5 using for loop
for(let i=1 ; i<=10 ;i++){//here i is initialised with 1 and each time its value get increased by 1 until it reaches 10
    console.log(" 5 * ",i," = ",5*i);
}

/* output : 
 5 *  1  =  5
 5 *  2  =  10
 5 *  3  =  15
 5 *  4  =  20
 5 *  5  =  25
 5 *  6  =  30
 5 *  7  =  35
 5 *  8  =  40
 5 *  9  =  45
 5 *  10  =  50
*/


//ACTIVITY 2 : WHILE LOOP

//task 3 : Program to calculate sum of numbers from 1 to 10 using while loop

let sum = 0;
let i = 1; //here i is initialised with 1
while(i<=10){  //continue  until i reaches 10
    sum += i;
    i++;  //each time its value get increased by 1 
}
console.log("sum of numbers from 1-10 is : ",sum);
//output : sum of numbers from 1-10 is : 55


//task 4 : Program to print numbers from 10-1 using while loop
let j = 10;
while(j>=1){
    console.log(j);
    j--;
}

/* output :
10
9
8
7
6
5
4
3
2
1
*/

//ACTIVITY 3 : DO-WHILE LOOP
 
//task 5 : Program to print numbers from 1 to 5 using do while loop

let k = 1;
do{
    console.log(k);
    k+=1;
}while(k<=5);

/* output :
1
2
3
4
5
*/

//task 6 : Program to calculate factorial of a number using do while loop

let number = 6;
let n = number;
let fact = 1;
do{
    fact *= number;
    number-=1;
}while(number>=1);
console.log("factorial of ",n," is : ",fact);

//output : factorial of  6  is :  720


//ACTIVITY 4 : NESTED LOOPS

//task 7 : print the pattern

str = ''
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str += " * ";
    }
    str += "\n";
}
console.log(str);

/* Output : 
 * 
 *  * 
 *  *  * 
 *  *  *  * 
 *  *  *  *  * 
*/


//ACTIVITY 5 : LOOP CONTROL STATEMENTS

//task 8 : program to print numbers from 1 to 10 except 5
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

/*output : 
1
2
3
4
6
7
8
9
10
*/

//task 9 : program to print from 1 to 10 and brak when 7 comes
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
/* output : 
1
2
3
4
5
6
*/