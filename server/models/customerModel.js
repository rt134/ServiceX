const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    drivingLicence: {type: String, required: true},
    age: {type: Number, required: true},
})

const Customer = mongoose.model("customer", customerSchema)

module.exports = Customer