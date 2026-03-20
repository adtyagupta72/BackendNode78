const http = require('http');
const server = http.createServer((request, response)=>
{
   console.log("URL:", request.url)
   switch(request.url)
   {
      case "/abc": 
      {
         response.writeHead(200, {'Content-Type':'Text/plain'});
         response.end("Here is your abc: ABC");
         console.log("Here is your abc: ABC")
         break;
      }
      case "/def": 
      {
         response.writeHead(200, {'Content-Type':'Text/plain'});
         response.end("DEF!");
         console.log("DEF!")
         break
      }
      case "/xyz": 
      {
         response.writeHead(200, {'Content-Type':'Text/plain'});
         response.end("This is X with Y and Zee!");    
         console.log("This is X with Y and Zee!")
         break
      }
      default:
      {
         response.writeHead(200, {'Content-Type':'Text/plain'});
         response.end("404, Page not found!");
      }
   }
   
})
console.log("port 3000")
server.listen(3000, '127.0.0.1');
//   http://127.0.0.1:3000
