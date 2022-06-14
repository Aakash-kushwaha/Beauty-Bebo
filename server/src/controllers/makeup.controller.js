const express = require('express');
const Makeup=require("../models/makeup.model");
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const makeupes = await Makeup.find().lean().exec();
        console.log(makeupes.length)
        return res.status(201).send(makeupes)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/:id', async function(req, res){
    try{
        const makeup =await Makeup.findById(req.params.id).lean().exec();
        return res.status(201).send(makeup)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const makeup = await Makeup.create(req.body);
        return res.status(200).send(makeup)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router