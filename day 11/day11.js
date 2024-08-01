//ACTIVITY 1 : UNDERSTANDING PROMISES

//Task 1 : Create a promise that resolves with a message after a 2 second timeout and log the message to the console

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("message executed successfully");
    },2000);
    
});
promise.then((res)=>{
    console.log(res);
});

//output : message executed successfully

// Task 2 :  Create a promise that rejects with a message after a 2 second timeout and handle the error using .catch()

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("some error occured");
    },2000);
});
promise2.catch((err)=>{
    console.log(err);
});

//output : some error occured

//ACTIVITY 2 : CHAINING PROMISES

//task 3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order

const fetchData = (data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("All data fetched!");
        },2000); 
    });
    
};

console.log("fetching data1...");
fetchData(1).then(()=>{
    console.log("fetching data2....");
    fetchData(2).then(()=>{
        console.log("fetching data 3...");
        fetchData(3).then((msg)=>{
            console.log(msg);
        });
    });
});


/*output : 
etching data1...
1
fetching data2....
2
fetching data 3...
3
All data fetched!
*/

//ACTIVITY 3 : USING ASYNC AND AWAIT

//task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value

const fun = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("successfully executed");
        },2000);
    });
}

(async function (){
    const pr = await fun();
    console.log(pr);
})();

//output : successfully executed

//task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message

const fun2 = ()=>{
    return new Promise((resolve,reject)=>{
        reject("some error is found");
    })
}
(async function()
{
    try 
    {
        await fun2();
    } 
    catch (err) 
    {
        console.log(err);
    }
})();

//output : some error is found

//ACTIVITY 4 : Fetching data from an API

//task 6 : 

const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const funn = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(url,options).then((msg)=>{
            msg.json().then((data)=>{
            resolve(data);
            })
        })
    })
}

funn().then((msg)=>{
    console.log(msg);
})


//Task 7 : Use the fetch API to get data from public api and log the response data to the console using promises


(async function(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
})()


//Activity 5 Concurrent Promises

//Task 8 : Use Promise.all to wait for multiple promises to resolve and then logs the resolved value

function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("successfull");
        },4000);
    });
};

const a=fun();
const b=asyncFunc3();
Promise.all([a,b]).then((values)=>{
    console.log(values);
});
//output
//[ 'successfully executed', 'successfull' ]

//Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises
Promise.race([a,b]).then((values)=>{
    console.log(values);
});
