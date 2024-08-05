//ACTIVITY 1 : CLASS DEFINITION

//task 1 : Define a class Person with properties name and age and a method to return greeting message. Create an instance of the class and log the greeting message.

class Person{
    constructor(firstname,lastname,age){
    this.firstName = firstname;
    this.lastName = lastname
    this.age = age;
    };
    greet(){
        console.log(`Hi ${this.name}, nice to meet you`);
    }
    static msg(){
        console.log("This is a static method");
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
    setFirstName(f){
        this.firstName = f;
    }
    setLastName(l){
        this.lastName = l;
    }
}
let a = new Person("Akansha","Sharma",65)
a.greet();

//output : Hi Akansha, nice to meet you

//task 2 : Add a method to the Person class that updates the age property and logs the updated age

Person.prototype.updateAge = function(ag){
    this.age = ag;
}
a.updateAge(45);
console.log(a.age);

//output : 45

//ACTIVITY 2 : CLASS INHERITANCE

//task 3 : Define a class Student that extends Person class. Add a property studentId and a method to return the studentId. Create an Instance of Student class and log the student ID.

class Student extends Person{
    static numOfStudents = 0;
    constructor(fname,lname,age,id){
        super(fname,lname,age)
        this.id = id;
        Student.numOfStudents+=1;
    }
    getId(){
        console.log(`Student Id of ${this.firstName} ${this.lastName} is ${this.id}`);
    }
    greet(){
        console.log(`Hllo , ${this.firstName} ${this.lastName}`);
    }
}

let s = new Student("Priya","Yadav",98,256);
s.getId();

//output : Student Id of Priya Yadav is 256


//task 4 : Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
s.greet();

//output : Hllo , Priya Yadav

//ACTIVITY 3 : STATIC METHODS AND PROPERTIES

//Task 5: Add a static method to the Person class that returns a generic 
// greeting message. Call this static method without creating an instance of 
// the class and log the message.
Person.msg();

//output : This is a static method

// Task 6 : Add a static property to the Student class to keep track of the number 
// of students created. Increment this property in the constructor and log the 
// total number of students.
let p = new Student("Skashi","Maath",45,678);
console.log(`Number of students are ${Student.numOfStudents}`);

//output : Number of students are 2


//ACTIVITY 4 : GETTERS AND SETTERS

//Task 7 : Add a getter method to the Person class to return the full name (assume a firstName and lastName preperty). Create an instance of the class and log the message.

let fullname = a.getFullName();
console.log(fullname);

//output : Akansha Sharma

//Task 8 : Add a setter method to the Person class to update the name properties (firstName and lastName).Update the name using the setter and lof the fullName.
a.setFirstName("Ridhima");
a.setLastName("Sapra");
console.log(a.getFullName());

//output : Ridhima Sapra


//ACTIVITY 5 : PRIVATE FIELDS

//Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account{
    #balance;
    constructor(currBalance)
    {
        this.#balance=currBalance;
    }
    depositMoney(amt)
    {
        this.#balance+=amt;
    }
    withdrawMoney(amt)
    {
        if(amt<=this.#balance)
            this.#balance-=amt;
        else    
            console.log("Not enough balance to withdraw balance");
    }
    getBalance()
    {
        return this.#balance;
    }
}

//Task 10: Create an instance of the Account class and test the deposit 
// and withdraw methods, logging the balance after each operation.
let account1=new Account(3450);
account1.depositMoney(50);
console.log("Current balance = Rs.",account1.getBalance()); //3500
account1.withdrawMoney(100);
console.log("Current balance = Rs.",account1.getBalance()); //3400