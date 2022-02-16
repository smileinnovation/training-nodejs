const promise = new Promise(function (resolve, reject) {
  // After the timeout reaches 300ms, fulfill the promise with value
  // 'FULFILLED!'.

  setTimeout(function () {
    resolve('FULFILLED!');
  }, 300);
});

console.log("please wait...");
promise.then(console.log);
console.log("while doing something else...");