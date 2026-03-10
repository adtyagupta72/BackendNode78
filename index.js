// console.log("Hello there!")
// console.log(`V8 version: ${process.versions.v8}`);
console.log('First');
setTimeout(() => console.log('Third'), 0);
Promise.resolve().then(() => console.log('Second'));
console.log('Fourth');
