// require packages and libraries
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')

// imports
const workouts = require('./routes/v1/workouts/workouts')

// initialization
const app = express()
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

// routes
app.use('/api/v1/workouts', workouts)   // workouts API routes
// test routes
app.get('/', (req, res) => {
    res.status(200).json({ mssg: "Hello, world!" })
})

// connect to DB and start server
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log({
                connection: true,
                port: `https://localhost:${PORT}`
            })
        })
    })
    .catch((error) => {
        console.log(error.message)
    })