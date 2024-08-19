const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
res.send('hello');
});
router.get('/admin',(req,res)=>{
res.send('admin products');
});

module.exports = router;