//Activity 1 : IF-ELSE STATEMENT

//task 1 : Program to check whether number is positive,negative or zero

let a = 4;
if(a>0){ //execute when a is greater then zero
    console.log(a," is positive");
}
else if(a<0){ //execute when a is less than zero
    console.log(a," is negative");
}
else{  //execute when a is zero
    console.log(a," is zero");
}

//output : 4 is positive


//task 2 : program to check if a person is eligible to vote or not
let age = 16;
if(age>=18){
    console.log("person with age ",age," is eligible to vote"); //execute when age is greater than or equal to 18
}
else{
    console.log("person with age ",age," is not eligible to vote"); // execute when age is less than  18
}

//output : person with age 16 is not eligible to vote 

//Actvity 2 : NESTED IF-ELSE STATEMENT

//task 3 : Program to find largest of three numbers
 let num1 = 5;
 let num2 = 9;
 let num3 = 6;
 if(num1>num2){ //execute when num1 is greater than num2
    if(num1>num3){
        console.log(num1," is largest"); //execute when num1 is greater than num2 and num1 is greater than num3
    }
    else{
        console.log(num3," is largest"); //execute when num1 is greater than num2 and num3 is greater than num1
    }
 }
 else{ //execute when num2 is greater than or equal to num1
    if(num2>num3){
        console.log(num2," is largest"); //execute when num2 is greater than or equal to num1 and num2 is greater than num3
    }
    else{
        console.log(num3," is largest"); //execute when num2 is greater than or equal to num1 and num3 is greater than or equal to num2
    }
 }

 //output : 9 is largest


 //Activity 3 : SWITCH CASE

 //task 4 : Program that takes a number and log the day name for that number
 let number = 5;
 switch(number){
    case 1 : console.log("Sunday"); //execute when number is 1
    break;
    case 2 : console.log("Monday"); //execute when number is 2
    break;
    case 3 : console.log("Tuesday"); //execute when number is 3
    break;
    case 4 : console.log("Wednesday"); //execute when number is 4
    break;
    case 5 : console.log("Thursday"); //execute when number is 5
    break;
    case 6 : console.log("Friday"); //execute when number is 6
    break;
    case 7 : console.log("Saturday"); //execute when number is 7
    break;
    default: console.log("Invalid number"); //execute when number is other than 1-7
}

//output : Thursday


//task 5 : Program to find grade from score using switch case

let score = 65;
  switch (Math.floor(score / 10)) {
    case 10: case 9:
        console.log('Grade = A for score',score);
        break;
    case 8:
        console.log('Grade = B for score',score);
        break;
    case 7:
        console.log('Grade = C for score',score);
        break;
    case 6:
        console.log('Grade = D for score',score);
        break;
    case 5:
        console.log('Grade = E for score',score);
        break;
    default:
        console.log('Grade = F for score',score);
}

//output : Grade = D for score 70

//Activity 4 : TERNARY OPERATOR

//task 6 : Program to check if a number is odd or even using ternary operator

let n = 35;
n%2==0?console.log(n," is even"):console.log(n," is odd");

//output : 35 is odd


//Activity 5 : COMBINING CONDITIONS

//task 7 : Program to check if given year is leap year or not

let year = 2024;
if(year%400 == 0){ //first check the condition whether divisible by 400 or not
    console.log(year," is leap year");
} 
else if(year%4==0){ //check divisiblity with 4
    if(year%100 != 0){ // if not divided by 100 then leap year
        console.log(year," is leap year");
    }
    else{ //if divided by 100 and 4 but not divided by 400,then not leap year
        console.log(year," is not leap year");
    }
}
else{
    console.log(year," is not leap year");
}

//output : 2024 is leap year



//feature 1 : To check number is positive,negative or zero

let a2 = -6;
if(a2>0){ //execute when a2 is greater then zero
    console.log(a2," is positive");
}
else if(a2<0){ //execute when a2 is less than zero
    console.log(a2," is negative");
}
else{  //execute when a2 is zero
    console.log(a2," is zero");
}

//output : -6 is negative



//feature 2 : program to check if a person is eligible to vote or not
let ag = 24;
if(ag>=18){
    console.log("person with age ",ag," is eligible to vote"); //execute when ag is greater than or equal to 18
}
else{
    console.log("person with age ",ag," is not eligible to vote"); // execute when ag is less than  18
}

//output : person with age 24 is eligible to vote 


//feature 3 :  Program that takes a number and log the day name for that number
 let number1 = 2;
 switch(number1){
    case 1 : console.log("Sunday"); //execute when number1 is 1
    break;
    case 2 : console.log("Monday"); //execute when number1 is 2
    break;
    case 3 : console.log("Tuesday"); //execute when number1 is 3
    break;
    case 4 : console.log("Wednesday"); //execute when number1 is 4
    break;
    case 5 : console.log("Thursday"); //execute when number1 is 5
    break;
    case 6 : console.log("Friday"); //execute when number1 is 6
    break;
    case 7 : console.log("Saturday"); //execute when number1 is 7
    break;
    default: console.log("Invalid number"); //execute when number1 is other than 1-7
}

//output : Monday


//feature 4 : Program to find grade from score using switch case

let sc = 80;
switch (Math.floor(score / 10)) {
  case 10: case 9:
      console.log('Grade = A for score',sc);
      break;
  case 8:
      console.log('Grade = B for score',sc);
      break;
  case 7:
      console.log('Grade = C for score',sc);
      break;
  case 6:
      console.log('Grade = D for score',sc);
      break;
  case 5:
      console.log('Grade = E for score',sc);
      break;
  default:
      console.log('Grade = F for score',sc);
}

//output : Grade = B for score 80



//feature 5: Program to check if given year is leap year or not

let ye = 1900;
if(ye%400 == 0){ //first check the condition whether divisible by 400 or not
    console.log(ye," is leap year");
} 
else if(ye%4==0){ //check divisiblity with 4
    if(ye%100 != 0){ // if not divided by 100 then leap year
        console.log(ye," is leap year");
    }
    else{ //if divided by 100 and 4 but not divided by 400,then not leap year
        console.log(ye," is not leap year");
    }
}
else{
    console.log(ye," is not leap year");
}

//output : 1900 is not leap year