const express = require('express');
const router = express.Router();

const {signup_get, signup_post, test_request} = require('../controllers/auth.js');

router.get('/test', (req,res) => {
    res.json("test");
});

router.get('/signup', signup_get);
router.post('/signup',signup_post);
router.post('/test_post',test_request);



module.exports = router;