//activity 1 : ARITHEMATIC OPERATOR

//task 1 : addition of two numbers
let a = 5;
let b = 6;
console.log(" addition of 5 and 6 : ",a+b);
 // output : addition of 5 and 6 : 11

//task2 : subtraction of two numbers
let n1 = 12;
let n2 = 5;
console.log("subtraction of 12 and 5 : ",n1-n2); 
// output :subtraction of 12 and 5 : 7

//task3 : multiplication of two numbers
let a1 = 4;
let a2 = 5;
console.log("multiplication of 4 and 5 : ",a1*a2);
 //  output : multiplication of 4 and 5 : 20

//task4 : division of two numbers
let b1 = 24;
let b2 = 6;
console.log("division of 24 by 6 : ",b1/b2);
 //  output : division of 24 by 6 : 4

//task5 : remainder when one number is divided by other
let c1 = 43;
let c2 = 7;
console.log("remainder when 43 is divided by 7 : ",c1%c2); 
//  output : remainder when 43 is divided by 7 : 1



//activity 2 : ASSIGNMENT OPERATOR


//task6 : addition assignment operator (+=)
let x1 = 5;
let x2 = 6;
x1 += x2 //x1 = x1 + x2
console.log("addition assignment operator x1 += x2 (x1 = x1 + x2) : ",x1);
 //  output : addition assignment operator x1 += x2 (x1 = x1 + x2) : 11

//task 7 : subtraction assignment operator (-=)
let y1 = 9;
let  y2 = 2;
y1 -= y2; //y1 = y1-y2
console.log("subtraction assignment operator y1 -= y2 (y1 = y1 - y2) : ",y1);
 //  output : subtraction assignment operator y1 -= y2 (y1 = y1 - y2) : 7



//activity 3 : COMPARISION OPERATOR

//task 8 : less than and greater than operator
let d1 = 8;
let d2 = 10;
console.log("less than operator 8<10 : ",d1<d2);
 // output : less than operator 8<10 : true
console.log("greater then operator 10>8 :",d1>d2); 
// output : greater then operator 10>8 :false

//task 9 : less than or equal to and greater than or equal to operator
let e1 = 5;
let e2 = 6;
let e3 = 6;
console.log("greater than equal to operator 5>=6 :",e1>=e2);
 // output : greater than equal to operator 5>=6 :false
console.log("less then equal to operator 6<=6: ",e2<=e3); 
// output : less then equal to operator 6<=6: true

//task 10 : equal to operator
let f1 = "ocd";
let f2 = "ocd";
console.log("comparision operator for f1 == f2 : ",f1 == f2);
 // output : comparision operator for f1 == f2 : true
console.log("comparision operator for f1===f2 : ",f1 === f2); 
// output : comparision operator for f1===f2 : true



//activity 4 : LOGICAL OPERATOR

//task11 : AND operator
const num1 = 10, num2 = 3;
console.log("result of comparision operator and logical operator(and) for 10<6 and 3<5 is : ",(num1 < 6) && (num2< 5)); 
// output : result of comparision operator and logical operator(and) for 10<6 and 3<5 is : false

//task12 : OR operator
const num3 = 10, num4 = 3;
console.log("result of comparision operator and logical operator(or) for 10<6 or 3<5 is : ",(num3 < 6) && (num4< 5));
 // output :  result of comparision operator and logical operator(or) for 10<6 or 3<5 is : false

//task13 : NOT operator
let num5 = 5 ;
console.log("not operator with comparision operator : ",!(num5==5));
 //  output : not operator with comparision operator : false



//acticity 5 : TERNARY OPERATOR

//task 14 : ternary operator
let number = 25;
number>0?console.log(number," is positive"):console.log(number," is negative"); 
// output : 25 is positive



//feature 1 : ARITHEMATIC operator
let g1 = 40;
let g2 = 3;
console.log("40+3 : ",g1+g2); 
// output : 40+3 : 43
console.log("40-3 : ",g1-g2); 
// output : 40-3 : 37
console.log("40*3 : ",g1*g2);
 // output : 40*3 : 120
console.log("40/3 : ",g1/g2); 
// output : 40/3 : 13.33
console.log("40%3 : ",g1%g2);
// output : 40%3 : 1



//feature 2 : COMPARISION OPERATOR
let number3=20 , number4="10" ;
let result2 = (number3 > number4) && (number3 < number4) ;
let result3 = (number3 > number4) || (number3 > number4) ;
let result4 = !(number3=== number4) ;

console.log("result of 20>10 and 20<10 : ",result2 ) ;
  // output :  result of 20>10 and 20<10 : false
console.log("result of 20>10 or 20<10 : ",result3 ) ; 
 //  output : result of 20>10 or 20<10 : true
console.log("result of comparision operator : is 20 equal to 10?? ",result4 ) ; 
 // output :  result of comparision operator : is 20 equal to 10??  true



//feature 3 : //TERNARY OPERATOR
let numb = -25;
numb>0?console.log(numb," is positive"):console.log(numb," is negative");
 // output : -25 is negative
