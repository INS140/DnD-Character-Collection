const characters = require("express").Router()
const Character = require('../models/characters.js')
//const characterSeedData = require('../Seeders')

//FIND ALL CHARACTERS
characters.get('/', async (req, res) => {
    try {
        const foundChars = await Character.find()
        res.status(200).json(foundChars)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//SEED DATA
//will be removed for final implementation
characters.get('/seed', async (req, res) => {
    try {
        await Character.insertMany(charSeedData)
        res.status(201).json({ message: 'Seeded data successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'request failed' })
    }
})

//FIND SPECIFIC CHARACTER
characters.get('/:id', async (req, res) => {
    try {
        const foundChar = await Character.findById(req.params.id)
        return res.status(200).json(foundChar)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE CHARACTER
characters.post('/', async (req, res) => {
    try {
        const newChar = await Character.create(req.body)
        return res.status(201).json({
            message: 'Successfully inserted a new character',
            data: newChar
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
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
        res.status(500).json({ message: 'Server error'})
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
        res.status(500).json({ message: 'Server error'})
    }
})

module.exports = characters