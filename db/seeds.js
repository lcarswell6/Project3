require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const { User, Product } = require('./schema')

const hats = new Product({
    name = "new hat",
    description = "this is a new hat",
    price = 29.00,
});
const shoes = new Product({
    name = "new shoe",
    description ="this is a new shoe",
    price = 29.00,
});

const member = new User({
    userName = 'New Member',
    userPassword = "new_member"
});

User.remove({})
    .then(() => member.save())
    .then(() => console.log('save success'))
    .then(() => mongoose.connection.close())