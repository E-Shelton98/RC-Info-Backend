//Enviromental Variables
require('dotenv').config();

//////////////////////////////
//Mongoose Connection
//////////////////////////////

//set mongodb uri to .env value
const { MONGODBURI } = process.env;

// import mongoose
const mongoose = require('mongoose');

//set mongoose configuration options
const config = { useUnifiedTopology: true, useNewUrlParser: true };

//set db connection
const DB = mongoose.connection;

//connect mongoose using mongodb uri and configuration options
mongoose.connect(MONGODBURI, config);

DB.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('You are disconnected to Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
