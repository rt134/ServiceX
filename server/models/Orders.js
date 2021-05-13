const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    buyerEmail : {
        type: String,
        required: true,
        max : 255
    },
    sellerEmail : {
        type : String,
        required: true,
        max : 255
    },
    serviceName : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required: true
    }


});

module.exports = mongoose.model('Orders',ordersSchema);