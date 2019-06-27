
const sum = (a, b) => a + b;

const add10 = sum.bind(null, 10);

console.log(sum(1,1));
console.log(add10(5));

