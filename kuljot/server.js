// const http = require("http");
// const server = http.createServer((request,response) => {
//     console.log("URL:",request.url);
//     switch(request.url) {
//         case "/abc": 
//         {
//             response.writeHead(200,{"content-type":'Text/plain'});
//             response.end("here is a abc your abc ");
//             console.log("here is a abc your abc")
//             break;
//         } 
//         case "/def": 
//         {
//             response.writeHead(200,{"content-type":'Text/plain'});
//             response.end("DEF");
//             console.log("DEF")
//             break;
//         }
//         case "/xyz": 
//         {
//             response.writeHead(200,{"content-type":'Text/plain'});
//             response.end("This is x and y and zee");
//             console.log("This is x and y and zee")
//             break;
//         }
//         default: {
//             response.writeHead(200,{"content-type":'Text/plain'});
//             response.end("404 page not found");
//             console.log("404 page not found")
//         }
//     }

// });
// console.log("port 3000")
// server.listen(3000,'127.0.0.1')



const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
    console.log("URL:", request.url);
    switch (request.url) {
        case "/login":
            {
                response.writeHead(200, { "content-type": 'text/html' })
                const readStream = fs.createReadStream('login.html', 'utf-8')
                readStream.pipe(response)
                break;
            }
        case "/profile":
            {
                response.writeHead(200, { "content-type": 'text/html' })
                const readStream = fs.createReadStream('profile.html', 'utf-8')
                readStream.pipe(response)
                break;
            }
        case "/home":
            {
                response.writeHead(200, { "content-type": 'text/html' })
                const readStream = fs.createReadStream('home.html', 'utf-8')
                readStream.pipe(response)
                break;
            }
        default: {
            response.writeHead(200, { "content-type": 'text/html' })
            const readStream = fs.createReadStream('404NotFound.html', 'utf-8')
            readStream.pipe(response)
        }
    }

});
console.log("port 3000")
server.listen(3000, '127.0.0.1')