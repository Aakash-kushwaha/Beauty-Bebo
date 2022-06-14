const express = require('express');
const Skincare=require("../models/skincare.model");
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const skincares = await Skincare.find().lean().exec();
        console.log(skincares.length)
        return res.status(201).send(skincares)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/:id', async function(req, res){
    try{
        const skincare =await Skincare.findById(req.params.id).lean().exec();
        return res.status(201).send(skincare)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const skincare = await Skincare.create(req.body);
        return res.status(200).send(skincare)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router