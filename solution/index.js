
// 1) Let and const

console.log("\n## 1) Let and const")

const myConstant = "Something immutable";
const myStuff =  ["something", "something else"];
let unstableStuff = "messy stuff";
var youNeverKnow = "an apple a day keep the doctor away";

// uncomment to test ...
// myConstant = "is it so immutable ?";
myStuff.push('I also forgot this something else')

if(true) {
    let unstableStuff = "ugly";
    var youNeverKnow = "???";
    console.log(myConstant);
    console.log(unstableStuff);
    console.log(youNeverKnow);
}
console.log(unstableStuff);
console.log(youNeverKnow);

// 2) Fat arrow

console.log("\n## 2) Fat arrow")

function oldFashion() {
    console.log('jquery was a revolution');
}

const teenager = () => console.log('Ok boomer');

oldFashion();
teenager();

// 3) Default parameter

console.log("\n## 3) Default parameter")

const sumMeUp = (a, b = 10) => {
    return a + b;
}

console.log(sumMeUp(10));
console.log(sumMeUp(10, 30));

// 4) For loop

console.log("\n## 4) For loop")

for(let v of myStuff) {
    console.log(v);
}

// 5) Spread attribute
console.log("\n## 5) Spread attribute")
const ImFlexible = (...toSum) => {
    let sum = 0;
    for(let i of toSum) {
        sum += i;
    }
    return sum;
}

console.log(ImFlexible(10, 20, 40));
console.log(ImFlexible(1,2, 3, 4, 5, 6, 7, 8))

// 6) Map structure
console.log("\n## 6) Map structure")

const todo = new Map();
todo.set("first", "prepare this training");
todo.set("second", "give this training");
todo.set(3, ['have a 🍺', ImFlexible(1, 1)])

console.log(todo.get('first'));
console.log(todo.get('second'));
console.log(todo.get(3));

for(let [key, value] of todo) {
    console.log(`- ${key} : ${value}`);
}

// 7) Set structure
console.log("\n## 7) Set structure")

const uniqueStuff = new Set();

uniqueStuff.add("asm");
uniqueStuff.add("c++");
uniqueStuff.add("scala");
uniqueStuff.add("php");
uniqueStuff.add("php");
uniqueStuff.add("scala");
uniqueStuff.add("python");

console.log(`set size: ${uniqueStuff.size}`);
console.log(`does it contains java ? ${uniqueStuff.has('java')}`);
console.log(`does it contains scala ? ${uniqueStuff.has('scala')}`);

// 8) Static method
console.log("\n## 8) Static method")

class ImClassy {
    constructor() {
        this.stuff = 0;
    }

    static sumStuff(a, b) {
        return a + b;
    }

    incrementStuff() {
        this.stuff += 1;
    }
}

const classy = new ImClassy();
classy.incrementStuff();
classy.incrementStuff();
console.log(ImClassy.sumStuff(classy.stuff, 1));

// 9) Getter/Setter
console.log("\n## 9) Getter/Setter")

class ImMoreClassy {
    constructor() {
        this.stuff = 0;
    }

    static sumStuff(a, b) {
        return a + b;
    }

    incrementStuff() {
        this.stuff += 1;
    }

    get Stuff() {
        return this.stuff;
    }

    set Stuff(s) {
        this.stuff = s;
    }
}

const moreClassy = new ImMoreClassy();
moreClassy.Stuff = 12;
moreClassy.incrementStuff();
console.log(ImClassy.sumStuff(moreClassy.Stuff, 1));


