const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
    garageName : {
        type: String,
        required: true,
        max : 255
    },
    email : {
        type : String,
        required: true,
        max : 255,
        min : 6
    },
    contact : {
        type : String
    },
    basePrice : {
        type : Number,
        required: true
    },
    location : {
        type: {type:String},
        coordinates: [Number]
    },
    picUrl : {
        type: String
    }


});

module.exports = mongoose.model('Mechanic',mechanicSchema);