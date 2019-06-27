
### Goal

Learn how to use promises

Resources : https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a

----

## 1) 

Using setTimeout, print the string 'TIMED OUT!' after 300ms.

----

## 2) 

Create a promise. Have it fulfilled with a value of 'FULFILLED!' in executor after a delay of 300ms, using setTimeout.

-----

## 3) 

Create a promise that after a delay of 300ms, rejects with an Error object. The Error object should be constructed with parameter 'REJECTED!', which is the textual message of the error.

Create a function onReject to print error.message using console.log. Pass this function as a rejection handler to the then method of your promise.

---- 

## 4) 

First, create a promise using the Promise constructor.

In the promise’s executor, immediately fulfill the promise with a value of 'PROMISE VALUE'.

After the creation of the promise, pass console.log as the success handler to the promise.

Finally, print out “MAIN PROGRAM” with console.log.

----

## 5) 

Construct a promise chain that returns values to prove to yourself that promise handlers will wrap your returned values in promises allowing additional chaining.

    - Declare a function attachTitle which prepends 'Hello ' to its first argument and returns the result.
    - Create a fulfilled promise with a value of 'Bob'.
    - Build a promise chain off the promise we just constructed that first calls attachTitle then calls console.log.
    - If your program runs successfully, it should print out “Hello Bob” which is extremely exciting.

----

## 6) 


Build a program that take in argv[2] a string that can be a valid json or invalid json. In case of invalid json, the parsing error should be displayed. The parsing must be done asynchronously. Steps to build this program :

     - Build a function called parsePromised that creates a promise, performs JSON.parse in a try/catch block, and fulfills or rejects the promise depending on whether an error is thrown. Note: your function should synchronously return the promise!
     - Build a sequence of steps like the ones shown above that catches any thrown errors and logs them to the console.


----

## 7) 

We are going to demonstrate this to ourselves by creating a chain of functions that all print to the console.

Create a function alwaysThrows that throws an Error with text "OH NOES";
Create a function iterate that prints the first argument (an integer) to it and then returns that argument + 1;
Create a promise chain using Promise.resolve that wraps your iterate method, then a series of iterations that attempts to perform iterate a total of 10 times.
Attach a rejection handler at the bottom of your chain to print the error.message using console.log.
Insert a call to alwaysThrows after your 5th call of iterate
If you have done this correctly, your code should print 1,2,3,4,5, "[Error: OH NOES]". It's important to notice that the thrown exception was turned into a rejected promise which caused the rejected promise to travel down the promise chain to the first available rejection handler.

----

## 8)

Write a program that 'promisify' a HTTP GET request. In this program you must display in the console the json returned by this URL/API call : http://api.plos.org/search?q=title:DNA




