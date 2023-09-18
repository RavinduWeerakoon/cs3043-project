const express = require('express');
const router = express.Router();

const {signup_get} = require('../controllers/auth.js');

router.get('/test', (req,res) => {
    res.json("test");
});

router.get('/signup', signup_get);



module.exports = router;