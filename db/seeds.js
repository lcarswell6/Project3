require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Product } = require('./schema')

const hats = new Product({
    name: "Hat",
    description: "this is a new hat",
    productPrice: 29.00,
});
const shoes = new Product({
    name: "Shoe",
    description: "this is a new shoe",
    productPrice: 29.00,
});

const user = new User({
    name: 'New Member',
    password: "asdf"
});

User.remove({})
    .then(() => user.save())
    .then(() => console.log('save success'))
    .then(() => mongoose.connection.close())