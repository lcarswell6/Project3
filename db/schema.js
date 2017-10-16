const mongoose = require('mongoose')





const productSchema = mongoose.Schema({
    productName = String,
    productDescrip = String,
    productPrice = Number,
})

const userSchema = mongoose.Schema({
    userName = String,
    userEmail = String,
    userPhone = String,
    userAddress = String,
    
})

const User = mongoose.model('User', userSchema)

module.exports = User 