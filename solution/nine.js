
const aLongRunningTask = async (a) => {
    return a + 10;
}

const anotherLongRunningTask = async (a) => {
    return a/2;
}

const computeStuff = (a) => new Promise(async (resolve, reject) => {
    let r = await aLongRunningTask(a);
    r = await anotherLongRunningTask(r);
    resolve(r);
})

console.log('Please wait');
computeStuff(2).then(console.log)
console.log("While doing something complex");
