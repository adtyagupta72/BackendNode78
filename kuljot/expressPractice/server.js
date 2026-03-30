const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);

server.listen(5001,function() {
    const port = server.address().port
    console.log("The app is listening at http:localhost:%s",port)
})

app.get('/', function(req,res) {
    res.send("Hello world")
});
app.get('/api1', function(req,res) {
    res.send("api 1 is called !!")
})


// https://myskillverse.ai?param1=kuljot&param2=Adityasir
// https://google.com?param1=kuljot&param2=Adityasir