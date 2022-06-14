const express = require('express');
const Eyeliner=require("../models/eyeliner.model");
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const eyelineres = await Eyeliner.find().lean().exec();
        console.log(eyelineres.length)
        return res.status(201).send(eyelineres)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/:id', async function(req, res){
    try{
        const eyeliner =await Eyeliner.findById(req.params.id).lean().exec();
        return res.status(201).send(eyeliner)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const eyeliner = await Eyeliner.create(req.body);
        return res.status(200).send(eyeliner)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router