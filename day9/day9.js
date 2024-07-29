//ACTIVITY 1 : SELECTING AND MANIPULATING ELEMENTS

//task 1 : select HTML element by its id and change its text content

let firstTask = document.querySelector("#firstTask");
firstTask.innerText = "Changed By Using InnerText with Id";


//task 2 : select HTML element by class and change its background color

let secondTask = document.querySelector(".secondTask");
secondTask.style.backgroundColor = "yellow";


//ACTIVITY 2 : CREATING AND APPENDING ELEMENTS

//task 3 : create a new div element with some text content and append it to the body
let body = document.querySelector("body");
let div1 = document.createElement("div");
div1.style.height="fit-content";
div1.style.width="100px";
div1.innerText="Hi! I was added to the body";
div1.style.backgroundColor="yellow";
div1.style.textAlign="center";
body.append(div1);

//task 4 : create a new li element and add it to an existing ul list.

let list1=document.getElementById("list1");
let li=document.createElement("li");
li.innerText="Sakshi";
list1.append(li);

//ACTIVITY 3 : REMOVING ELEMENTS

//Task 5 : select an html element and remove it from DOM
let btn2=document.querySelector('#btn2');
btn2.remove();

//Task 6 : remove the last child of a specific html element
body.lastChild.remove();

//ACTIVITY 4 : MODIFYING ATTRIBUTES AND CLASSES

//task 7 :select an html element and change one of its attributes
let link=document.getElementsByTagName("a");
for(let i of link)
    i.href="https://www.google.com/";


//Task 8 : add and remove a CSS class to/from an HTML element
li.classList.add('list-item');
li.classList.remove('list-item'); 

//ACTIVITY 5 : EVENT HANDLING

//Task 9 : add a click event listener to a button that changes the text content of a paragraph
let btn1=document.getElementById("btn1");
let p1 = document.querySelector("#p1");
btn1.addEventListener("click",()=>{
    p1.innerText="Here is a list of some of the amazing books written by renowned authors from all over the world."
});


//Task 10 : add a mouseover event listener to an element that changes its border color
p1.addEventListener("mouseover",()=>{
    p1.style.border="solid";
    p1.style.borderColor="black";
});