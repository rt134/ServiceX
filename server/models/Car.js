const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    ownerName : {
        type: String,
        required: true,
        min: 6,
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
    carName : {
        type : String,
        required: true,
        max : 255
    },
    costPerDay : {
        type : Number,
        required: true
    },
    location : {
        type: {type:String},
        coordinates: [Number]
    },
    isAvail : {
        type : Boolean,
        required : true,
        default : true
    },
    picUlr : {
        type: String
    }


});

module.exports = mongoose.model('Car',carSchema);