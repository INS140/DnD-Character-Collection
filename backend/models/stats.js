// Require mongoose
const mongoose = require('mongoose');

// Schema
const statSchema = new mongoose.Schema({
    healthPoints: { type: Number, required: true },   
    armorClass: { type: Number, required: true },
    maxHp: { type: Number, required: true},
    hitDice: { type: String, required: true },
    speed: { type: Number, required: true},
    proficiency: { type: Number, required: true},
    strength: { type: Number, required: true},
    dexterity: { type: Number, required: true},
    constitution: { type: Number, required: true},
    intelligence: { type: Number, required: true},
    wisdom: { type: Number, required: true},
    charisma: { type: Number, required: true},
    skills: [
        { type: object, default: 0}
    ],
    savingThrows: [
        { type: object, default: 0}
    ],
}, {toJSON: { virtuals: true }})

module.exports = mongoose.model('Stats', statSchema);

