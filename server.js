const http = require('http');
const server = http.createServer((request, response)=>
{
   response.writeHead(200, {'Content-Type':'Text/plain'});
   response.end("Hello world, This server is now running!!!");
})
console.log("port 3000")
server.listen(3000, '127.0.0.1');
//   http://127.0.0.1:3000
