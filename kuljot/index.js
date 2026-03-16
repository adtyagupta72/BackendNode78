// console.log("Hello there!");
// console.log(`V8 version ${process.versions.v8}`);

// console.log("first");
// setTimeout(() => console.log("Third"),0);
// Promise.resolve().then(() => console.log("second"))
// console.log("Fourth")


// console.log("1.start")
// process.nextTick(() => console.log("2.Next tick"))

// Promise.resolve().then(() => console.log("3. Promise"))
// setTimeout(() => console.log("4.Timeout"),0)
// setImmediate(() => console.log("5.immediate"));
// console.log("6. End");

// fs = require("fs");
// function getData(err,data) {
//     console.log("data :",data)
//     console.log("err :",err)
// }

// fs.readdir('H:/Windows C/DESKTOP/Javascript learn/React learn/my-first-router/',getData);
// console.log("This is asyncronous calls");


// const EventEmitter = require ("events");
// class MyEmitter extends EventEmitter{}

// const myEmitter = new MyEmitter();
// myEmitter.on('parcelRecieved', () => {
//     console.log("Parcel recieved event occured");

// })
// myEmitter.emit('parcelRecieved')

// const EventEmitter = require ("events");
// class MyEmitter extends EventEmitter{}

// const myEmitter = new MyEmitter();
// myEmitter.on('parcelRecieved', () => {
//     console.log("Parcel recieved event occured");

// })
// // myEmitter.emit('parcelRecieved')

// let eventCallBack = () => {
//     console.log("Parcel recieved event occured");
// }

// myEmitter.emit('parcelRecieved',eventCallBack)
// myEmitter.on('parcelRecieved')



// const fs = require("fs");
// console.log("1.starting file read");

// try {
//     const data = fs.readFileSync('myFile.txt','utf-8');
//     console.log("2.File content :",data);
    
// } catch (error) {
//     console.log("Error",error);

    
// }
// console.log("3.Done the reading data");



// asyncronous call 

const fs = require("fs")

console.log("1.starting file read");

    fs.readFile('myFile.txt','utf-8',(err,data) => {
        if(err)
            throw err;
        console.log("2. File content data",data)
    });
console.log("3.Done the reading data");