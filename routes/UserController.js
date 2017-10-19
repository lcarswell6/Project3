const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')


router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const updateUser = req.body.user
        const user = await User.findById(req.params.id)
        user.name = updateUser.name
        user.password = updateUser.password
      const saved = await user.save() 
      res.json(saved) 
    }
    catch(err) {
        res.send(err)
    }
})



router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const user = await User.findByIdAndRemove(req.params.id)
        const users = User.find({})
        console.log(users)
        res.json('users')
    } catch (err) {
    console.log(err)
    }
})



module.exports = router