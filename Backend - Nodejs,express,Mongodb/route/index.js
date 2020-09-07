const express = require('express');
const router = express.Router();


  
router.get('/', (req, res, next)=>{
    res.send({"name": "This is the Backend "});


})


module.exports = router;