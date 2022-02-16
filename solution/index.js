const { DateTime } = require("luxon");

console.log("Hello world");
console.log(`Today is ${DateTime.now().toFormat('EEEE')}`);

