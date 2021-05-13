const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Mech = require('../models/Mechanic');
const Ord = require('../models/Orders');


// -------------------------------------------- Car ----------------------------------------------------------\\
// get all cars (w)
router.get('/car', async(req,res) => {
    try{
        const car = await Car.find();
        res.json(car);
    }catch(err){
        res.json({message : err});
    }
});

// submit cars (w)
router.post('/car', async (req,res)=>{
    const car = new Car({
        ownerName : req.body.ownerName,
        email : req.body.email,
        contact : req.body.contact,
        carName : req.body.carName,
        costPerDay : req.body.costPerDay,
        location : req.body.location,
        isAvail : req.body.isAvail,
        picUlr : req.body.picUlr
    });
    try{
        const saveCar = await car.save();
        res.json(saveCar);
    }catch(err){
        res.json({message : err});
    }

});

// get a specific car (w)
router.get('/car/:carId',async (req,res)=>{
    try{
        const getCar = await Car.findById(req.params.carId);
        res.json(getCar);
    }catch(err){
        res.send({message:err});
    }
})



// Delete car working (w)
router.delete('/car/:carId', async(req, res)=> {
    try{
        const removeCar = await Car.remove({_id: req.params.carId });
    }catch(err){
        res.json({message : err});
    }
});

// update (w)
router.patch('/car/:carId', async(req, res)=> {
    try{
        const getCar = await Car.findById(req.params.carId);
        getCar.ownerName = req.body.ownerName,
        getCar.contact = req.body.contact,
        getCar.costPerDay = req.body.costPerDay,
        getCar.location = req.body.location,
        getCar.isAvail = req.body.isAvail,
        getCar.picUlr = req.body.picUlr
        const x = await getCar.save();
        res.json(x);
    }catch(err){
        res.send({message:err});
    }
});






// -------------------------------------------- Mechanics ----------------------------------------------------------\\
// get all Mechanics (w)
router.get('/mechanic', async(req,res) => {
    try{
        const mech = await Mech.find();
        res.json(mech);
    }catch(err){
        res.json({message : err});
    }
});

// submit mechanic (w)
router.post('/mechanic', async (req,res)=>{
    const mech = new Mech({
        garageName : req.body.garageName,
        email : req.body.email,
        contact : req.body.contact,
        basePrice : req.body.basePrice,
        location : req.body.location,
        picUlr : req.body.picUlr
    });
    try{
        const saveMech = await mech.save();
        res.json(saveMech);
    }catch(err){
        res.json({message : err});
    }

});

// get a specific mechanic (w)
router.get('/mechanic/:mechId', async(req,res)=>{
    try{
        const getMech = await Mech.findById(req.params.mechId);
        res.json(getMech);
    }catch(err){
        res.send({message:err});
    }
})

// Delete mechanic (w)
router.delete('/mechanic/:mechId', async(req, res)=> {
    try{
        const removeMech = await Mech.remove({_id: req.params.mechId });
    }catch(err){
        res.json({message : err});
    }
});

// update mechanic(w)
router.patch('/mechanic:mechId', async(req, res)=> {
    try{
        const getMech = await Mech.findById(req.params.mechId);
        getMech.garageName = req.body.garageName,
        getMech.contact = req.body.contact,
        getMech.basePrice = req.body.basePrice,
        getMech.location = req.body.location,
        getMech.picUlr = req.body.picUlr
        const x = await getMech.save()
        res.json(getMech);
    }catch(err){
        res.send({message:err});
    }
});






// -------------------------------------------- Orders ----------------------------------------------------------\\
// get all Orders (w)
router.get('/orders', async(req,res) => {
    try{
        const ord = await Ord.find();
        res.json(ord);
    }catch(err){
        res.json({message : err});
    }
});

// submit Orders (w)
router.post('/orders', async (req,res)=>{
    const ord = new Ord({
        buyerEmail : req.body.buyerEmail,
        sellerEmail : req.body.sellerEmail,
        serviceName : req.body.serviceName,
        amount : req.body.amount
    });
    try{
        const saveOrd = await ord.save();
        res.json(saveOrd);
    }catch(err){
        res.json({message : err});
    }

});

// get a specific Order (w)
router.get('/orders/:ordId', async(req,res)=>{
    try{
        const getOrd = await Ord.findById(req.params.ordId);
        res.json(getOrd);
    }catch(err){
        res.json({message : err});
    }
    
})

// Delete Orders (w)
router.delete('/orders/:ordId', async(req, res)=> {
    try{
        const removeOrd = await Ord.remove({_id: req.params.ordId });
    }catch(err){
        res.json({message : err});
    }
});

// update Orders Orders cannot ber updated

module.exports = router;