const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const stuffRoute = require('./routes/stuff')
const userRoutes = require('./routes/User')
const db = require('./models/db')
const app  = express()

app.use(cors())


app.use(bodyParser.json())
app.use('/api/stuff', stuffRoute)
app.use('/api/auth', userRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))


module.exports = app
