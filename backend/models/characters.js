//require mongoose
const mongoose = require('mongoose')
//creating shorthand for the schema contructor 
const { Schema } = mongoose;

// schema
const characterSchema = new Schema({
    user: {type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    class: { type: String, required: true },
    level: { type: Number, required: true },
    spells: [
        { type: strings }
    ],
    inventory: [
        { type: strings }
    ],
    stats: {type: Schema.Types.ObjectId,
        required: true,
        ref: 'Stats'
    },
    name: { type: String, required: true },
    image: String,
    race: { type: String, required: true },
    description: String,
    }, {toJSON: { virtuals: true }})

    characterSchema.virtual('stats', {
        ref: Stats,
        localField: '_id',
        foreignField: 'stat'
    })

    characterSchema.virtual('notes', {
        ref: Notes,
        localField: '_id',
        foreignField: 'note'
    })

//model and export
const Character = mongoose.model('Character', characterSchema)
module.exports = Character