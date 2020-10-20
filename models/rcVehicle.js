const { Schema, model } = require('mongoose')

//RC_VEHICLE SCHEMA
const rcVehicleSchema = new Schema(
    {
        name: String,
        power_type: {
            nitro: {
                fuelAmount: String,
                motorSize: String
            },
            electric: {
                batteryType: String,
                motorKvH: String
            }
        },
        img: String,

    }
)

//RC_VEHICLE MODEL
const RC_Vehicle = model('RC_Vehicle', rcVehicleSchema)

//EXPORT MODEL
module.exports = RC_Vehicle