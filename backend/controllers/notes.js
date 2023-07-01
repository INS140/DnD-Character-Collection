const notes = require("express").Router()
const Notes = require('../models/notes')

//FIND ALL NOTES
notes.get('/', async (req, res) => {
    try{
        const foundNotes = await Notes.find()
        res.json(foundNotes)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//FIND SPECIFIC NOTES
notes.get('/:id', async (req, res) => {
    try {
        const foundNotes = await Notes.findById(req.params.id)
        res.status(200).json(foundNotes)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE NOTES
notes.post('/', async (req, res) => {
    try {
        const newNotes = await Notes.create(req.body)
        res.status(201).json({
            message: 'Successfully insert a new note(s)',
            data: newNotes
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE NOTES INFORMATION
notes.put('/:id', async (req, res) => {
    try {
        const updatedNotes = await Notes.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ 
            message: 'Successfully updated note(s)',
            data: updatedNotes
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE A NOTE
notes.delete('/:id', async (req, res) => {
    try {
        const deletedNotes = await Notes.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted note(s)`,
            data: deletedNotes
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = notes