const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
name: {
type: String,
default: "product name"
},
    description:{
type: String,
default:"product description here"
    }, 
    productPrice = Number,
})

const userSchema = mongoose.Schema({
name: {
    type: String,
},
password = String,
    
})

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)

module.exports = {
    User, Product 
};