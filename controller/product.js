const fs = require("fs");
const mongoose = require('mongoose')
const model = require('../model/product')
const Product = model.Product;

exports.createProduct = async(req,res)=>{
    const product = new Product(req.body);
    try{
      let resP = await  product.save()
      res.json(resP)
    }catch(err){
      console.log(err);
      res.json(err)
    }
  }
  
  exports.getProducts = async(req,res)=>{
    console.log(req.params);
    const id = req.params.id; 
    const product = await Product.findById(id)
    res.json(product)
  }
    
  exports.replaceProduct = async (req,res)=>{
    console.log(req.params);
    const id = req.params.id; 
    const product = await Product.findOneAndReplace({_id: id}, req.body, {new:true})
    res.status(201).json(product)
  }
  
  exports.updateProduct = async (req,res)=>{
    console.log(req.params);
    const id = req.params.id; 
    const product = await Product.findOneAndUpdate({_id: id}, req.body, {new:true})
    res.status(201).json(product)
  }
  exports.deleteProduct = async (req,res)=>{
    console.log(req.params);
    const id = req.params.id; 
    const product = await Product.findOneAndDelete({_id: id})
    res.status(201).json(product)
  }
  exports.getAllProducts = async (req,res)=>{
    const products = await Product.find()
    res.json(products)
  }