var express = require('express');
var app = express();
var http = require('http');
const server = http.createServer(app);
server.listen(5001, function()
{
   var port = server.address().port
   console.log("This app is listening at http://localhost:%s", port)
})

app.get('/', function(req, res)
{
   res.send('Hello world');
})

app.get('/api1', function(request, response)
{
    console.log("request query: ", request.query)
    console.log("Rollnumber", request.query.rollnumber)
   response.send('API 1 is called!!');
})

// https://myskillverse.ai?param1=adtya&param2=chandresh&.....
// https://google.com?rollnumber=1&name=kuljot&......