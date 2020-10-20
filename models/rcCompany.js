const { Schema, model } = require('mongoose')

//RC_COMPANY SCHEMA
const rcCompanySchema = new Schema(
    {
        name: String,
        yearEstablished: Number,
        brandStatement: String,
        rcVehicles: [{ type: Schema.Types.ObjectId, ref: 'rcVehicle' }]
    }
)

//RC_COMPANY MODEL
const RC_Company = model('RC_Company', rcCompanySchema)

//EXPORT MODEL
module.exports = Dog