const express = require('express');
const Bodywash=require("../models/bodywash.model");
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const bodywashes = await Bodywash.find().lean().exec();
        console.log(bodywashes.length)
        return res.status(201).send(bodywashes)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/:id', async function(req, res){
    try{
        const bodywash =await Bodywash.findById(req.params.id).lean().exec();
        return res.status(201).send(bodywash)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const bodywash = await Bodywash.create(req.body);
        return res.status(200).send(bodywash)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router