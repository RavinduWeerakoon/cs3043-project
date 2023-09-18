

// import {signup_get} from "../controllers/auth.js";
const express = require('express');

// const {signup_get} = require('../controllers/auth.js');

const router = express.Router();

// router.get("/register", signup_get);

router.get("/ap_test", (req,res) => {res.json("test")});
//router.post("/login", login);

module.exports = router;