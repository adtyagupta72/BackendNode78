const http = require("http");
const server = http.createServer((request,response) => {
    response.writeHead(200,{"content-type":'Text/plain'});
    response.end("Hello world, this is is now runing my on the work int ");

});
console.log("port 3000")
server.listen(3000,'127.0.0.1')