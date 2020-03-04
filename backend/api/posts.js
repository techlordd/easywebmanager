const express = require('express');
const router = express.Router();

const domainModel = require('../models/Domain');


router.get('/', async (req, res)=> {
    try {
        const domainList = await domainModel.find().sort({date: -1});
        return res.json(domainList);       
    } catch (err) {
        console.error(err.message);
        return res.status(400).send('Server Error');        
    }
    
});

router.post('/', async(req,res)=>{
    const { domain_name, domain_created, domain_expiring, host_name, host_created, host_expiring } = req.body;

    try {
        const newPost = new domainModel({
            domain_name,
            domain_created,
            domain_expiring,
            host_name,
            host_created,
            host_expiring
        })
    
        const post = await newPost.save();
        res.json(post);
        
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
    
})

module.exports = router;