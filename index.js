// console.log("Hello there!")
// console.log(`V8 version: ${process.versions.v8}`);
// console.log('First');
// setTimeout(() => console.log('Third'), 0);
// Promise.resolve().then(() => console.log('Second'));
// console.log('Fourth');
// console.log('1. Start');
// // Next tick queue
// process.nextTick(() => console.log('2. Next tick'));
// // Microtask queue (Promise)
// Promise.resolve().then(() => console.log('3. Promise'));
// // Timer phase
// setTimeout(() => console.log('4. Timeout'), 0);
// // Check phase
// setImmediate(() => console.log('5. Immediate'));
// console.log('6. End');

// fs = require('fs');
// function getData(err, data)
// {
//    console.log('data:', data)
//    console.log('err:', err)
// }
// //fs.readdir('/Users/adtyagupta/Documents/', getData);
// fs.readdir('/', getData);
// console.log("This is Asynchronous!!")

// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('ParcelReceived', ()=>
// {
//    console.log("ParcelReceived event occurred!!");
// });

// let eventCallback = ()=>
// {
//    console.log("ParcelReceived event occurred!!");
// } //Callback
// myEmitter.emit('ParcelReceived')

// myEmitter.on('ParcelReceived', eventCallback);

// myEmitter.emit('ParcelReceived')
// myEmitter.emit('ParcelReceived')
//===========Synchronous call
// const fs = require('fs');
// console.log('1. Starting sync read...');
// try
// {
//    const data = fs.readFileSync('myfile.txt', 'utf8');
//    console.log('2. File contents:', data);
// }
// catch(error)
// {
//    console.log("Error while reading the file: ", error)
// }

// console.log('3. Done reading file');
//================Asynchronous call
// const fs = require('fs');
// console.log('1. Starting async read...');
// fs.readFile('myfile.txt', 'utf8', (err, data) => 
// {
//   if (err) throw err;
//   console.log('2. File contents:', data);
// });
// console.log('3. Done starting read operation');

//CallBackHell
getUser(userId, (err, user) => 
  {
    if (err) 
      return handleError(err);
    getOrders(user.id, (err, orders) => 
      {
        if (err) 
          return handleError(err);
        processOrders(orders, (err) => 
          {
            if (err) 
              return handleError(err);
            console.log('All done!');
          });
      });
  });
