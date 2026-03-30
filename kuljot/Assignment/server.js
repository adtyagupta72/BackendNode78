// 1.File Stream Assignments: 
// a.Large File Reader
// i. Create a Node.js program that reads a large text file using streams and displays it in console
// ii. Use fs.createReadStream()
const fs = require("fs");

const readStream = fs.createReadStream(__dirname+'/dummyData.txt','utf-8');

readStream.on('data',(chunk) => {
    console.log(data)
    console.log("Receieved Data");
    console.log(chunk);
});

