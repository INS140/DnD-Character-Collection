const characters = require("express").Router()
const CharData = require('../Models/character.js')

characters.get('/', async (req, res) => {
    try {
        const chars = await CharData.find()
        return res.status(200).json(chars)
    }
    catch {
        res.status(500).json({ message: 'Server error'})
    }
})

characters.get('/:id', async (req, res) => {
    try {
        const char = await CharData.findById(req.params.id)
        return res.status(200).json(char)
    }
    catch {
        res.status(500).json({ message: 'Server error'})
    }
})

characters.post('/', async (req, res) => {
    try {
        const newChar = await CharData.create(req.body)
        return res.status(201).json(newChar)
    }
    catch {
        res.status(500).json({ message: 'Server error'})
    }
})

characters.put('/:id', async (req, res) => {
    try {
        const updatedChar = await CharData.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json(updatedChar)
    }
    catch {
        res.status(500).json({ message: 'Server error'})
    }
})

characters.delete('/:id', async (req, res) => {
    try {
        const removedChar = await CharData.findByIdAndDelete(req.params.id)
        return res.status(200).json(removedChar)
    }
    catch {
        res.status(500).json({ message: 'Server error'})
    }
})

module.exports = character