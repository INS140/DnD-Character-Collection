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
    classType: { type: String, required: true },
    level: { type: Number, required: true },
    spells: [
        { type: String }
    ],
    inventory: [
        { type: String }
    ],
    name: { type: String, required: true },
    image: String,
    race: { type: String, required: true },
    description: String,
    hp: { type: Number, required: true },   
    ac: { type: Number, required: true },
    maxHp: { type: Number, required: true },
    hitDice: { type: String, required: true },
    speed: { type: Number, required: true },
    str: { type: Number, required: true },
    dex: { type: Number, required: true },
    con: { type: Number, required: true },
    int: { type: Number, required: true },
    wis: { type: Number, required: true },
    cha: { type: Number, required: true },
    skills: { type: Object, required: true },
    savingThrows: { type: Object, required: true },
    passiveMod: { type: Object, required: true },
    }, {toJSON: { virtuals: true }})

    characterSchema.virtual('stats', {
        ref: 'Stats',
        localField: '_id',
        foreignField: 'character'
    })

    characterSchema.virtual('notes', {
        ref: 'Notes',
        localField: '_id',
        foreignField: 'character'
    })

//model and export
const Character = mongoose.model('Character', characterSchema)
module.exports = Character