// 1.File Stream Assignments: 
// a.Large File Reader
// i. Create a Node.js program that reads a large text file using streams and displays it in console
// ii. Use fs.createReadStream()
// const fs = require("fs");

// const readStream = fs.createReadStream(__dirname+'/dummyData.txt','utf-8');

// readStream.on('data',(chunk) => {
//     console.log("Receieved Data");
//     console.log(chunk);
// });

// 2.File Copier
// Copy content from input.txt to output.txt using streams
// Use createReadStream + createWriteStream

// var fs = require('fs');
// const readStream = fs.createReadStream('input.txt','utf-8');
// const writeStream = fs.createWriteStream('output.txt');
// readStream.on('data',(chunk) => {
// console.log("readStream :",chunk)
// })
// readStream.on('end',() => {
//     writeStream.end()
//     console.log("Task completed")

// })
// readStream.on('error',(error) => {
//     console.log("error: ",error.message)
// });

// 2.Pipe Assignments: 
// Stream Piping
// Copy a file using .pipe() instead of manual handling
// Use readStream.pipe(writeStream
// var fs = require("fs");

// const readStream = fs.createReadStream('input.txt','utf-8');
// const writeStream = fs.createWriteStream('output.txt');

// readStream.pipe(writeStream);

// b.Compress File using Pipe
// i. Compress a file using gzip.
// ii. Use zlib, 
// iii. Pipe read stream → gzip → write stream

// var fs = require("fs");
// var zlib = require("zlib");
// var gzip = zlib.createGzip();

// const readStream = fs.createReadStream('input.txt','utf-8');
// const writeStream = fs.createWriteStream('output.txt.gz');
// readStream.pipe(gzip).pipe(writeStream)


// 3. Buffer Assignment
// a.Create and Manipulate Buffer
// i. Create a buffer from a string & Convert it back to string
// ii.Use Buffer.from() & Log buffer and decoded value

// var str = "Hello this is node series";
// var result = Buffer.from(str);
// console.log("Buffer Val :",result);
// var convertToStr = result.toString();
// console.log("Convert to string:",convertToStr)

// b.Buffer Comparison Tool
// 1.Compare two buffers and check if they are equal.
// 2.Take two strings
// 3.Convert to buffers
// 4.Compare using Buffer.compare()

// var str1 = "hello node js"
// var str2 = "Hello node js"
// var convertStr1ToBuffer = Buffer.from(str1);
// var convertStr2ToBuffer = Buffer.from(str2);

// console.log("str1",convertStr1ToBuffer)
// console.log("str2",convertStr2ToBuffer)

// let result = Buffer.compare(convertStr1ToBuffer,convertStr2ToBuffer)
// console.log(result)

// c.Encode/Decode Tool
// 1.Create a tool that: Encodes text to Base64 & Decodes back

// var str = "Node js is fun";
// var convertToBuf = Buffer.from(str);
// var convertToBase64 = convertToBuf.toString("base64");
// console.log("convertToBuf :",convertToBuf);
// console.log("convertToBase64 :",convertToBase64);
// var convertToBuffer = Buffer.from(convertToBase64,"base64")
// console.log("convertToBuffer",convertToBuffer);

// var convertToString = convertToBuffer.toString()
// console.log("convertToString",convertToString);

// 4. Hosting Multiple Pages
// Basic Multi-Page Server
// Create a Node server using http module that serves:
// / → Home page
// /about → About page
// /contact → Contact page

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     console.log("req", req.url)
//     switch (req.url) {
//         case "/": {
//             res.writeHead(200,{"content-type":"text/html"})
//             let readStream = fs.createReadStream('Home.html','utf-8');
//             readStream.pipe(res)
//             break;
//         }
//         case "/about": {
//             res.writeHead(200,{"content-type":"text/html"})
//             let readStream = fs.createReadStream('About.html','utf-8');
//             readStream.pipe(res)
//             break;
//         }
//         case "/contact": {
//             res.writeHead(200,{"content-type":"text/html"})
//             let readStream = fs.createReadStream('Contact.html','utf-8');
//             readStream.pipe(res)
//             break;
//         }
//         default: {
//             res.writeHead(404,{"content-type":"text/html"})
//             res.end("404 not found page")
//         }
//     }
// })
// console.log("Port :5000")
// server.listen(5000, '127.0.0.1');


// b. Static File Server
// i Serve HTML files from a public folder
// ii Use fs.readFile
//iii  Dynamically load files
// c. Stream HTML Response
// i Serve HTML pages using streams instead of readFile

// const http = require("http");
// const fs = require("fs");
// let path = require("path");

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case "/": {
//             const filePath = path.join(__dirname, "public", "Home.html")
//             fs.readFile(filePath, 'utf-8', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                     return res.end("File not found")
//                 }
//                 res.writeHead(200, { 'content-type': "text/html" })
//                 res.end(data);
//             })
//             break;
//         }
//         case "/about": {
//             const filePath = path.join(__dirname, "public", "About.html")
//             fs.readFile(filePath, 'utf-8', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                     return res.end("File not found")
//                 }
//                 res.writeHead(200, { 'content-type': "text/html" })
//                 res.end(data);
//             })
//             break;
//         }
//         case "/contact": {
//             const filePath = path.join(__dirname, "public", "Contact.html")
//             fs.readFile(filePath, 'utf-8', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                     return res.end("File not found")
//                 }
//                 res.writeHead(200, { 'content-type': "text/html" })
//                 res.end(data);
//             })
//             break;
//         }

//     }
// })

// console.log("Port :5000")
// server.listen(5000, '127.0.0.1');


// 5.Combined Assignments
// a. File Upload Simulator
// b. Simulate file upload and save it using streams
// c. Handle POST request
// d. Save incoming data to file


var fs = require("fs");
var path = require("path");
var http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === '/upload') {
        const destination = path.join(__dirname, "upload.txt");
        const writeStream = fs.createWriteStream(destination);
        req.pipe(writeStream);

        writeStream.on("finish", () => {
            res.writeHead(200, { 'content-type': "text/html" })
            res.end("File uploaded successfully")
        })
        writeStream.on("error", () => {
            res.writeHead(500)
            res.end("Upload failed")
        })
    } else {
        res.end("Please use POST method to upload.")
    }
});
server.listen(5000, () => console.log("server is running is 5000"))
