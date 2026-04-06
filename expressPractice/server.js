var express = require('express');
var app = express();
const cors = require('cors');
var http = require('http');

// Allow requests from your Live Server origin
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

const server = http.createServer(app);
server.listen(5005, function()
{
   var port = server.address().port
   console.log("This app is listening at http://localhost:%s", port)
})

app.get('/', function(req, res)
{
   res.send('Hello world - New change');
})

app.get('/api1', function(request, response)
{
    console.log("request query: ", request.query)
    console.log("Rollnumber", request.query.rollnumber)
   response.send('API 1 is called!!');
})

app.get('/products',productsAPICallBack)

let productList = [
   {
      productID: 1,
      productTitle: "Bata Shoes",
      productPrice: 499,
      productDiscount: 10,
      productDiscountMode: "percentage"//flat
   },
   {
      productID: 2,
      productTitle: "Ladies Purse",
      productPrice: 4999,
      productDiscount: 5,
      productDiscountMode: "percentage"//flat
   },
   {
      productID: 3,
      productTitle: "Hair Comb",
      productPrice: 300,
      productDiscount: 30,
      productDiscountMode: "flat"//flat
   },
   {
      productID: 4,
      productTitle: "Action Shoes",
      productPrice: 899,
      productDiscount: 8,
      productDiscountMode: "percentage"//flat
   },
   {
      productID: 5,
      productTitle: "Headphones",
      productPrice: 1200,
      productDiscount: 120,
      productDiscountMode: "flat"//flat
   },
   {
      productID: 6,
      productTitle: "Laptop",
      productPrice: 1200,
      productDiscount: 120,
      productDiscountMode: "flat"//flat
   },
   {
      productID: 7,
      productTitle: "Smart Phone",
      productPrice: 1200,
      productDiscount: 120,
      productDiscountMode: "flat"//flat
   }
]

function productsAPICallBack(request, response)
{
   //console.log("productList.json(): ", JSON.stringify(productList))
   // response.writeHead(200, {
   //    'Content-Type': 'text/plain',
   //    'Access-Control-Allow-Origin' : '*',
   //    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
   // });
   response.send(JSON.stringify(productList))
}

// https://myskillverse.ai?param1=adtya&param2=chandresh&.....
// https://google.com?rollnumber=1&name=kuljot&......