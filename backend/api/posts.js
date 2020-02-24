const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    return res.send('Post Route');
});

router.post('/', (req,res)=>{
    
})

module.exports = router;