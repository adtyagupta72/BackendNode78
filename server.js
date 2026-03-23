const http = require('http');
const fs = require('fs')
// const server = http.createServer((request, response)=>
// {
//    console.log("URL:", request.url)
//    switch(request.url)
//    {
//       case "/abc": 
//       {
//          response.writeHead(200, {'Content-Type':'Text/plain'});
//          response.end("Here is your abc: ABC");
//          console.log("Here is your abc: ABC")
//          break;
//       }
//       case "/def": 
//       {
//          response.writeHead(200, {'Content-Type':'Text/plain'});
//          response.end("DEF!");
//          console.log("DEF!")
//          break
//       }
//       case "/xyz": 
//       {
//          response.writeHead(200, {'Content-Type':'Text/plain'});
//          response.end("This is X with Y and Zee!");    
//          console.log("This is X with Y and Zee!")
//          break
//       }
//       default:
//       {
//          response.writeHead(200, {'Content-Type':'Text/plain'});
//          response.end("404, Page not found!");
//       }
//    }
   
// })

const server = http.createServer((request, response)=>
{
   console.log("URL:", request.url)
   switch(request.url)
   {
      case "/login": 
      {
         response.writeHead(200, {'Content-Type':'text/html'});
         const readStream = fs.createReadStream('login.html', 'utf-8');
         readStream.pipe(response)
         break;
      }
      case "/home": 
      {
         response.writeHead(200, {'Content-Type':'text/html'});
         const readStream = fs.createReadStream('home.html', 'utf-8');
         readStream.pipe(response)
         break;
      }
      case "/profile": 
      {
         response.writeHead(200, {'Content-Type':'text/html'});
         const readStream = fs.createReadStream('profile.html', 'utf-8');
         readStream.pipe(response)
         break;
      }
      default: 
      {
         response.writeHead(200, {'Content-Type':'text/html'});
         const readStream = fs.createReadStream('notfound.html', 'utf-8');
         readStream.pipe(response)
         break;
      }
   }
});
console.log("port 3000")
server.listen(3000, '127.0.0.1');
//   http://127.0.0.1:3000
