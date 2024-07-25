// ACTIVITY 1 : OBJECT CREATION AND ACCESS

//task 1 : create an object representing a book and having properties like author,year and tittle and log it to console

const book = {
    tittle : "Peace at Every Step",
    year : 2020,
    author : "Thich Nhat Hanh"
};
console.log(book);

/* output : 
{
  tittle: 'Peace at Every Step',
  year: 2020,
  author: 'Thich Nhat Hanh'
}
  */

//task 2 : access and log the tittle and author of book object

bookAuthor = book.author
bookTittle = book.tittle
console.log("Author of book is : ",bookAuthor);
console.log("Tittle of book is : ",bookTittle);

/* output : 
Author of book is :  Thich Nhat Hanh
Tittle of book is :  Peace at Every Step
*/

//ACTIVITY 2 : OBJECT METHODS

//task 3 : add a method to book that return a string with book tittle and author and log them to console

book.getTA = function(){
    return "Tittle is : " + this.tittle + " and Author is : " + this.author;
};
console.log(book.getTA());

//output : Tittle is : Peace at Every Step and Author is : Thich Nhat Hanh

//task 4 : add a method that take a year and update the book year property

book.updateYear = function(ye){
    this.year = ye;
}
book.updateYear(2016);
console.log("Updated year is :",book.year);

//output : Updated year is : 2016

//ACTIVITY 3 : NESTED OBJECTS

//task 5 : create a nested object representing a library with properties like name and books an dlog library object to console

const library = {
    name : "National Library Of India",
    books : [{tittle:"thermodynamics",author:"newton",year:1930},{tittle:"data structure and algorithms",author:"J.K chabra",year:2010}]

};
console.log(library);
/* output :
{
  name: 'National Library Of India',
  books: [
    { tittle: 'thermodynamics', author: 'newton', year: 1930 },
    { tittle: 'data structure and algorithms', author: 'J.K chabra', year: 2010 }
  ]
}
*/

//task 6 : access of log the name of library and tittle of all books of library

let libName = library.name;
console.log("name of library is :",libName);
let libBooks = library.books;
console.log("Tittle of books are :");
for(let i=0;i<libBooks.length;i++){
    console.log(libBooks[i].tittle);
}

/* output : 
name of library is : National Library Of India
Tittle of books are :
thermodynamics
data structure and algorithms
*/

//ACTIVITY 4 : THE THIS KEYWORD

//task 7 : add a method which uses this keyword to access book tittle and author

console.log(book.getTA());

//output : Tittle is : Peace at Every Step and Author is : Thich Nhat Hanh

//ACTIVITY 5 : OBJECT ITERATION

//task 8 : for..in loop to iterate properties of object book

for(let p in book){
    console.log(p,":",book[p]);
};
/* output : 
tittle : Peace at Every Step
year : 2020
author : Thich Nhat Hanh
*/

//task 9 : use object.keys and object.values methods to log all properties and its values

let prop = Object.keys(book);
let val = Object.values(book);
console.log("all properties are :",prop);
console.log("all values are :",val);


//output : all properties are : [ 'tittle', 'year', 'author' ]
//         all values are : [ 'Peace at Every Step', 2020, 'Thich Nhat Hanh' ]
