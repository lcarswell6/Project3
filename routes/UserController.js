const express = require('express')
const Router = express.Router()
const { User } = require('./db/schema')


router.get('/', async (req, res) => {
try {
    const user = await User.find({}) 
    res.json(users) 
}
catch (err) {
    res.send(err)
}
})


module.exports = router;