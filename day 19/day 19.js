//ACTIVITY 1: BASIC REGULAR EXPRESIONS
//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

let str1 = "This is a javascript tutorial and we will discuss javascript in detail";
let r1 = str1.match(/javascript/ig);
console.log(r1);

//output : (2) ['javascript', 'javascript']


// Task 2: Write a regular expression to match all digits in a string. Log the matches.
let str2 = "I have 21 books and my friend has 56 books";
let r2 = str2.match(/[0-9]/g);
console.log(r2);

//output : (4) ['2', '1', '5', '6']


// ACTIVITY 2: CHARACTER CLASSES AND QUANTIFIERS
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

let str3 = "Hello,my name is Akansha and I am from Panipat";
let r3 = str3.match(/\b[A-Z][a-z]*/g);
console.log(r3);

//output : (4) ['Hello', 'Akansha', 'I', 'Panipat']

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

let str4 = "this is an string of 34 characters and 29 are missing from it";
let r4 = str4.match(/[0-9]+/g);
console.log(r4);

//output : (2) ['34', '29']


// ACTIVITY 3: GROUPUNG AND CAPTURING
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

let str5 = "(456) 987-3259";
let r5 = str5.match(/\((\d{3})\)\s(\d{3})-(\d{4})/);

console.log(`AreaCode = ${r5[1]}`); 
console.log(`Central Office Code = ${r5[2]}`);
console.log(`Line number = ${r5[3]}`); 

//output : AreaCode = 456
//         Central Office Code = 987
//         Line number = 3259


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = "akansha9876@gmail.com";
let r6 = email.match(/^(.+)@(.+)$/);
console.log("Username = " + r6[1]); 
console.log("Domain = " + r6[2]); 

//output : Username = akansha9876
//         Domain = gmail.com


// ACTIVITY 4: ASSERTIONS AND BOUNDRIES
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

let str7 = "This is a project of javascript";
let r7 = str7.match(/^This/i);
console.log(r7[0]);

//output : This

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let r8 = str7.match(/java\!$/i);
console.log(r8);
//output : null


// ACTIVITY 5: PRACTICAL APPLICATIONS
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

let p1 = "Akansha@7685";
let p2 = "fhduf2653";
let val = (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
let result1 = val.test(p1);
let result2 = val.test(p2);
console.log(result1);  //true
console.log(result2);  //false


// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let val2 = /^(?:(?:https?):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;
let u1 = "abcdcom";
let u2 = "https://google.com";
console.log(val2.test(u1));  // false
console.log(val2.test(u2));  // true

