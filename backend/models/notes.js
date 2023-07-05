//require mongoose
const mongoose = require('mongoose')
//creating shorthand for the schema contructor 
const { Schema } = mongoose;

// Schema
const noteSchema = new Schema({
    title: { type: String, required: true },   
    description: { type: String, required: true },
    character: {type: Schema.Types.ObjectId,
        required: true,
        ref: 'Character'
    }
})

//model and export
const Notes = mongoose.model('Notes', noteSchema)
module.exports = Notes