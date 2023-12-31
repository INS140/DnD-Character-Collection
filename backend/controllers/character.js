const characters = require("express").Router()
const Character = require('../models/characters.js')
const jwt = require('json-web-token')

//FIND ALL CHARACTERS FOR A USER
characters.get('/', async (req, res) => {
    try {
        if (req.headers.authorization !== undefined) {
            const [authenticationMethod, token] = req.headers.authorization.split(' ')

            if (authenticationMethod == 'Bearer') {
                const result = await jwt.decode(process.env.JWT_SECRET, token)
                const { id } = result.value
                const foundChars = await Character.find({
                    user: id
                })
                res.status(200).json(foundChars)
            }
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error', error: err})
    }
})

//FIND SPECIFIC CHARACTER
characters.get('/:id', async (req, res) => {
    try {
        const foundChar = await Character.findById(req.params.id)
            .populate('notes')
        return res.status(200).json(foundChar)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error', error: err})
    }
})

//CREATE CHARACTER
characters.post('/', async (req, res) => {
    try {
        const { hp } =  req.body
        const newChar = await Character.create({ ...req.body, maxHp: hp })
        
        res.status(201).json({
            message: 'Successfully inserted a new character',
            data: newChar
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error', error: err})
    }
})

//UPDATE CHARACTER INFORMATION
characters.put('/:id', async (req, res) => {
    try {
        const updatedChar = await Character.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.status(200).json({ 
            message: 'Successfully updated character',
            data: updatedChar
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error', error: err})
    }
})

//DELETE CHARACTER
characters.delete('/:id', async (req, res) => {
    try {
        const deletedChar = await Character.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: `Successfully deleted character(s)`,
            data: deletedChar
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error', error: err})
    }
})

module.exports = characters