const user = require('express').Router()
const User = require("../models/users")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

user.post('/', async (req, res) => {

    let user = await User.findOne({
        username: req.body.username
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({ error: `Invalid username or password` })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user._id })
        res.json({ user: user, token: result.value })
    }
})

user.get('/profile', async (req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const { id } = result.value

            let user = await User.findById(id)
            res.json(user)
        }
    } catch {
        res.json(null)
    }
})

user.get('/logout', async (req, res) => {
    // work in progress
    res.status(200).json({ message: 'Successfully logged out' })
})

module.exports = user