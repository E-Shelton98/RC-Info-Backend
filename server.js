//enviromental variables
require('dotenv').config()
const { PORT = 3000, NODE_ENV = "development" } = process.env

//import mongo connection from ./db/connection
const mongoose = require('./db/connection')

//import cors
const cors = require('cors')

//import express and setup app
const express = require('express')
const app = express()

//import morgan for logging
const morgan = require('morgan')

////////////////////////
//MIDDLEWARE
////////////////////////

//make app use cors to allow outside communication
app.use(cors())
//allow input from json
app.use(express.json())
//use morgan for logging in tiny format
app.use(morgan('tiny'))

//////////////////////////
//ROUTES AND ROUTERS
//////////////////////////

//Route for testing server is up and working
app.get('/', (req, res) => {
    res.json({ hello: "Hello World!"})
})

// rcCompany and rcVehicle Router
//const rcCompanyRouter = require('./controllers/rcCompany.js')
const rcVehicleRouter = require('./controllers/rcVehicle')

// rcCompany and rcVehicle Routes to send to respective router
//app.use('/rc_company', rcCompanyRouter)
app.use('/rc_vehicle', rcVehicleRouter)


//LISTENER
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})
