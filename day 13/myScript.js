//Task 6 : Install a third party module (eg lodash) using npm. Import and use a function from this module in a script

// npm install lodash
// let array = [1, 2, 3, 4];
// _.reverse(array);
// console.log(array);
// output: [4,3,2,1]


//Task 7 : Install a third party module (eg axios) using npm. Import and use a function to make a network request in a script

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Data received successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });



