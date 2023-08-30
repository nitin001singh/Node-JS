const mongoose = require('mongoose')
const { Schema } = mongoose;
const productSchema = new Schema({
    title: {type: String, required: true, unique:true},
    description: String,
    price: {type: Number, required: true, min:[0, 'wrong price']},
    rating:{type: Number, min:[0, 'wrong rating'], max: [5, 'Wrong max rating']},
    discountPercentage: {type: Number, min:[0, 'wrong min discount'], max: [50, 'Wrong max discount']},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail:  {type: String, required: true},
    images: [String]
  });
  
  exports.Product = mongoose.model('Product', productSchema);
