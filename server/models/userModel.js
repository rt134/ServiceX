const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phoneNumber:{type: Number,required: true},
    drivingLicence:{type: String, requied: true},
    passwordHash:{type: String, requied: true},
})

const User = mongoose.model("user", userSchema);

module.exports = User