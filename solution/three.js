// Create a promise

var promise = new Promise(function (resolve, reject) {
  // After the timeout reaches 300ms, reject the promise with an `Error` object
  // with parameter `"REJECTED!"`.

  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

// Create a function to print `error.message` using `console.log`.

function onReject(error) {
  console.log(error.message);
}

// Pass this function as a rejection handler to the `then` method of the
// promise (the second parameter).

console.log("Please wait");
promise.then(null, onReject);
console.log("while doing something else");

