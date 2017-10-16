const mongoose  = require('mongoose')

mongoose.Promise = global.Promise

const User = require('./schema')


const member  = new User ({
    userName = 'New Member',
    userEmail = 'newmember@newmember.com',
    userPhone = '4047650918',
}) 
