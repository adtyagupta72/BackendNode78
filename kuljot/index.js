// console.log("Hello there!");
// console.log(`V8 version ${process.versions.v8}`);

// console.log("first");
// setTimeout(() => console.log("Third"),0);
// Promise.resolve().then(() => console.log("second"))
// console.log("Fourth")


console.log("1.start")
process.nextTick(() => console.log("2.Next tick"))

Promise.resolve().then(() => console.log("3. Promise"))
setTimeout(() => console.log("4.Timeout"),0)
setImmediate(() => console.log("5.immediate"));
console.log("6. End");

fs = require("fs");
function getData(err,data) {
    console.log("data :",data)
    console.log("err :",err)
}

fs.readdir('H:/Windows C/DESKTOP/Javascript learn/React learn/my-first-router/',getData);
console.log("This is asyncronous calls");