//modules and globals
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

//configuration and middleware
app.use(cors({
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
mongoose.set({strictQuery: true})
try {
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('DATABASE CONNECTED')
} catch (err) {
    console.log(err)
}

//controllers and routes
const characterController = require('./controllers/character')
app.use('/characters', characterController)

const userController = require('./controllers/users')
app.use('/users', userController)

const authController = require('./controllers/authentication')
app.use('/authentication', authController)

const notesController = require('./controllers/notes')
app.use('/notes', notesController)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Dungeon!'})
})

app.get('*', (req, res) => {
    res.status(404).json({ message: 'endpoint data not found' })
})

//listening for connections
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT}`)
})

module.exports = app