const { Schema, model } = require('mongoose')
const mongoose = require('../db/connection')

//RC_VEHICLE SCHEMA
const rcVehicleSchema = new Schema(
    {
        name: String,
        img: String,
        rcCompany: {type: mongoose.Types.ObjectId, ref: "rcCompany"}
    }
)

//RC_VEHICLE MODEL
const RC_Vehicle = model('RC_Vehicle', rcVehicleSchema)

//EXPORT MODEL
module.exports = RC_Vehicle