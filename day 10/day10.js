//ACTIVITY 1 : EVENT HANDLING

//task 1 : Add a click event listener to a button that changes the text content of a paragraph
let task1 = document.querySelector("#task1");
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    task1.innerText = "Text changes";
});


//task 2 : Add a double click event listener to an image that toggles its visibility.
let btn2=document.querySelector("#btn2");
let img1=document.querySelector("#img1");
btn2.addEventListener("dblclick",function(){
    if(img1.style.visibility=="hidden")
    {
        img1.style.visibility="visible";
    }
    else
    {
        img1.style.visibility="hidden";
    }      
});

//ACTIVITY 2 : MOUSE EVENTS

//task 3 : Add a mouseover event listener to an element that changes its background color
let head1= document.querySelector("#head1");
head1.addEventListener("mouseover",()=>{
    head1.style.backgroundColor="yellow";
})


// task 4--> Task 4: Add a mouseout event listener to an element that resets its background color.
head1.addEventListener("mouseout",()=>{
    head1.style.backgroundColor="white";
})

//ACTIVITY 3 : KEYBOARD EVENTS

//task 5--> Add a keydown event listener to an input field that logs the key
//  pressed to the console.
let input1=document.querySelector("#input1");
input1.addEventListener("keydown",(event)=>{
    console.log(event.key); // The event.key returns value of the key pressed during a keyboard event
})

//task 6--> Add a keyup event listener to an input field that displays the 
// current value in a paragraph.
input1.addEventListener("keyup",()=>{
    console.log(input1.value);
});

//ACTIVITY 4 : FORM EVENTS

//task 7--> Add a submit event listener to a form that prevents the default 
// submission and logs the form data to the console. 
let test=document.querySelector("#test");
let dropdown1=document.querySelector("#dropdown1");
let dropdown2=document.querySelector("#dropdown2");
test.addEventListener("submit",(event)=>{
    event.preventDefault(); // to prevent default submission
    console.log(dropdown1.value);
    console.log(dropdown2.value);
});


//task 8--> Add a change event listener to a select dropdown that displays 
// the selected value in a paragraph.
let para2=document.querySelector("#para2");
dropdown1.addEventListener("change",()=>{
    para2.innerText=`Selected Option : ${dropdown1.value}`;
});


//ACTIVITY 5 : EVENT DELEGATION


//task 9--> Add a click event listener to a list that logs the text content
//  of the clicked list item using event delegation
let list1=document.querySelector("#list1");
list1.addEventListener("click",function(event){
    let listItem=event.target;
    if(listItem.tagName=="LI")
    {
        console.log(listItem.textContent);
    }
});


//task 10--> Add an event listener to a parent element that listens for 
// events from dynamically added child elements.
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    let li=document.createElement("LI");
    let input3=document.querySelector("#input3");
    li.innerText=input3.value;
    list1.append(li);
    list1.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI")
        console.log(event.target.innerText);
});
});
