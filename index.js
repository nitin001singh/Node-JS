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

const express = require('express')
const server = express();
console.log('hello 123');
server.listen(8080)


