const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.users[0];

exports.createProduct = (req,res)=>{
    console.log(req.body);
    data.users.push(req.body)
    res.json(req.body)
  }
  
  exports.getProducts = (req,res)=>{
    console.log(req.params);
    const id = +req.params.id; 
    const product = data.users.find(p=>p.id === id)
    console.log(product);
    res.json(product)
  }
  
  exports.replaceProduct = (req,res)=>{
    console.log(req.params);
    const id = +req.params.id; 
    const productIndex = data.users.findIndex(p=>p.id === id)
    data.users.splice(productIndex,1,{...req.body, id:id})
    console.log(product);
    res.status(201).json(product)
  }
  
  exports.updateProduct =  (req,res)=>{
    console.log(req.params);
    const id = +req.params.id; 
    const productIndex = data.users.findIndex(p=>p.id === id)
    const product = data.users[id]
    data.users.splice(productIndex,1,{...product, ...req.body})
    console.log(product);
    res.status(200).json(product)
  }
  exports.deleteProduct = (req,res)=>{
    console.log(req.params);
    const id = +req.params.id; 
    const productIndex = data.users.findIndex(p=>p.id === id)
    data.users.splice(productIndex,1)
    console.log(product);
    res.status(201).json(product)
  }
  exports.getAllProducts =  (req,res)=>{
    res.json(data.users)
  }