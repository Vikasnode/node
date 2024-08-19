const express = require('express');
const router = express.Router();
const owner = require('../models/owner');
require('dotenv').config()

router.get('/', (req, res) => {
    res.send('hello');
});

if (process.env.NODE_ENV == "development") {
    router.post('/create', async (req, res) => {
        let owners = await owner.find();
        if (owners.length > 0) {
            return res.sendStatus(505).send("You Don't Have Parmission to create products in store")
        }
        var {fullname,email,password} = req.boby;
        console.log(fullname,email,password);
        let createOwner = await owner.create({fullname,email,password});
        res.send(createOwner);
    })

}


module.exports = router;