const users = require("express").Router()
const UserData = require('../Models/user.js')

users.get('/', async (req, res) => {
    try {
        const users = await UserData.find()
        return res.status(200).json(users)
    }
    catch {
        res.status(500).json({ message: 'Server error' })
    }
})

users.get('/:id', async (req, res) => {
    try {
        const user = await UserData.findById(req.params.id)
        return res.status(200).json(user)
    }
    catch {
        res.status(500).json({ message: 'Server error' })
    }
})

users.post('/', async (req, res) => {
    try {
        const newUser = await UserData.create(req.body)
        return res.status(201).json(newUser)
    }
    catch {
        res.status(500).json({ message: 'Server error' })
    }
})

users.put('/:id', async (req, res) => {
    try {
        const updatedUser = await UserData.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(updatedUser)
    }
    catch {
        res.status(500).json({ message: 'Server error' })
    }
})

users.delete('/:id', async (req, res) => {
    try {
        const removedUser = await UserData.findByIdAndDelete(req.params.id)
        return res.status(200).json(removedUser)
    }
    catch {
        res.status(500).json({ message: 'Server error' })
    }
})

module.exports = user