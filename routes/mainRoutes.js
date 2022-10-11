const router = require('express').Router();
const Products = require('../models/products');
const apikeyMiddleware = require('../middlewares/apikeyMiddleware');

router.get('/api/get', async (req,res)=>{
    const dbResponse = await Products.find({});
    res.json(dbResponse);
})

router.post('/api/add', apikeyMiddleware ,async (req,res)=>{
    const {name, price} = req.query;
    const newRecord = {
        name,
        price
    }
    const dbResponse = await Products.create(newRecord);
    res.json(dbResponse);
})

router.delete('/api/delete', apikeyMiddleware , async (req,res)=>{
    const {name} = req.query;
    const newRecord = {
        name,
    }
    const dbResponse = await Products.deleteOne(newRecord);
    res.json(dbResponse);
})

router.put('/api/update/name', apikeyMiddleware , async (req,res)=>{
    const {old_data, new_data} = req.query;

    const dbResponse = await Products.updateOne({name: old_data}, {$set: {name: new_data}});

    res.json({status: "done"});
})

router.put('/api/update/price',apikeyMiddleware , async (req,res)=>{
    const {sent_name, new_price} = req.query;

    const dbResponse = await Products.updateOne({name: sent_name}, {$set: {price: new_price}});

    res.json({status: "done"});
})

module.exports = router;


