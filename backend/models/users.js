// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const { Schema } = mongoose;
const Character = require('./character.js');

//Schema
const userSchema = new Schema({
    userName: { type: String, required: true}
    password
})