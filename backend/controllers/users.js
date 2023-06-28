const users = require("express").Router()
const UserData = require('../Models/user.js')
const bcrypt = require('bcrypt')

//FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const users = await UserData.find()
        return res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//FIND SPECIFIC USER
users.get('/:id', async (req, res) => {
    try {
        const foundUser = await UserData.findById(req.params.id)
        return res.status(200).json(foundUser)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//CREATE USER
users.post('/', async (req, res) => {
    try {
        const newUser = await UserData.create(req.body)
        return res.status(201).json({
            message: 'Successfully insert a new user',
            data: newUser
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//USER ERROR
const { User } = db

users.post('/', async (req, res) => {
    const { password, ...rest } = req.body
    const passHash = await bcrypt.hash(password, 10)
    console.log(password, passHash)
    const user = await User.create({
        ...rest,
        role: 'reviewer',
        passwordDigest: passHash
    })
    res.json(user)
})


//UPDATE USER INFORMATION
users.put('/:id', async (req, res) => {
    try {
        const updatedUser = await UserData.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.status(200).json({
            message: 'Successfully updated user',
            data: updatedUser
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//DELETE A USER
users.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await UserData.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: `Successfully deleted user`,
            data: deletedUser
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = users