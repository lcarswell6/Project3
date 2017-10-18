require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserController = require('./routes/UserController')
const ProductController = require('./routes/ProductController')

mongoose.Promise = global.Promise;
const app = express();

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection

connection.on('connected', () => {
console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});

app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

app.use('/api/users', UserController)


//index renders in react app
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/client/build/index.html')
})

app.get('/', (req,res) => {
res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log("Magic happening on port " + PORT);
})