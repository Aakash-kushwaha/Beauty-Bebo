const express = require('express');
const Facewash=require("../models/faceWash.model");
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const facewashes = await Facewash.find().lean().exec();
        console.log(facewashes.length)
        return res.status(201).send(facewashes)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const facewash = await Facewash.create(req.body);
        return res.status(200).send(facewash)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router