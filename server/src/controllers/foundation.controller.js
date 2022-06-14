const express = require('express');
const Foundation=require("../models/foundation.model");
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const foundations = await Foundation.find().lean().exec();
        console.log(foundations.length)
        return res.status(201).send(foundations)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/:id', async function(req, res){
    try{
        const foundation =await Foundation.findById(req.params.id).lean().exec();
        return res.status(201).send(foundation)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const foundation = await Foundation.create(req.body);
        return res.status(200).send(foundation)
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports = router