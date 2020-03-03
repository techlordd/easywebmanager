const express = require('express');
const router = express.Router();

const domainModel = require('../models/Domain');


router.get('/', (req, res)=> {
    return res.send('Post Route');
});

router.post('/', async(req,res)=>{
    const { domain_name, domain_created, domain_expiring, host_created } = req.body;

    try {
        const newPost = new domainModel({
            domain_name,
            domain_created,
            domain_expiring,
            host_created
        })
    
        const post = await newPost.save();
        res.json(post);
        
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

    
    
})

module.exports = router;