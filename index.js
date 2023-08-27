// const lib = require('./lib')
// const fs = require('fs');
// import {sum, diff} from './lib.js'

// console.log(sum(5,6));
// console.log(diff(10,8));

// const opt = fs.readFileSync('demo.txt','utf-8')

// const t1 = performance.now()
// const opt = fs.readFile('demo.txt','utf-8',(err, txt)=>{
//     console.log(txt);
// })

// // console.log(opt);
// console.log(lib.sum(5,6));
// console.log(lib.diff(10,8));

// const t2 = performance.now()

// console.log(t2-t1);

// const express = require('express')
// const server = express();
// console.log('hello 123');
// server.listen(8080)

const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.products[0];
// const data = { age: 5 };
const server = http.createServer((req, res) => {

    if (req.url.startsWith('/product')){
        let id = req.url.split('/')[2]
        let prd = data.products.find(p=>p.id == (+id) )
        console.log(prd);
    }
  switch (req.url) {
    case "/":
      // res.writeHead(200);
      res.setHeader("Content-type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/aboutus":
      // res.writeHead(200);
      res.setHeader("Content-type", "text/html");
      res.end("<h1>About us<h1>");
      break;

    case "/product":
      res.setHeader("Content-type", "text/html");
      const indexpage = index.replace("**title**", product.title);
      res.end(indexpage);
      break;

    default:
      // res.writeHead(404);
      res.setHeader("Content-type", "text/html");
      res.end("<h1>Page not found</h1>");
      break;
  }
  console.log("Server started");
  //   res.setHeader("dummy", "dummyvalue");
  //   res.setHeader("Content-type", "text/html");
});
server.listen(8080);
