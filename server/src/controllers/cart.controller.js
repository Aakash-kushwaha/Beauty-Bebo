const express = require('express');
const Cart =require('../models/cart.model');
const router =express.Router();
router.get('/', async function(req, res){
    try{
        const carts = await Cart.find().lean().exec();
        console.log(carts)
        return res.status(201).send(carts)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get('/:id', async function(req, res){
    try{
        const cart =await Cart.findById(req.params.id).lean().exec();
        return res.status(201).send(cart)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post('/', async function(req, res){
    try{
        const cart = await Cart.create(req.body);
        return res.status(200).send(cart)
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.patch('/', async function(req, res){
    try{
        const cart =await Cart.find();
        cart.push(req.body);
        return res.status(201).send(cart)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports = router;