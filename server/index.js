const app = require('express')()
const { resolve } = require('path')
const path = require('path')
const Razorpay = require('razorpay')
const shortid = require('shortid')
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const cookieParser = require("cookie-parser")

dotenv.config()

// For Api endpoints
app.use(express.json());
const endPoints = require('./routers/Endpoints');
app.use('/api', endPoints)



app.use(cors({
    origin : ["http://localhost:3000"],
    credentials: true,
}))

var razorpay = new Razorpay({
    key_id: 'rzp_test_MKUouqTmTO1LNC',
    key_secret: 'YFILpPcrNGcsy9TKH4RNQcO5'
})

app.get('/payment', (req, res) => {
    res.send('Hello World')
})
app.post('/razorpay', async (req, res) => {

    const payment_capture = 1
    const amount = 499
    const currency = 'INR'

    const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount
    })
})

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
    console.log('Listening')
})

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MDB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) return console.error(err);
        console.log("Hello connected to MongoDB")
    })

app.use("/auth", require("./routers/userRouter"))
app.use("/customer",require('./routers/customerRouter'))

