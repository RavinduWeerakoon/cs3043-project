const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookiepass = require('cookie-parser');


const Authroutes = require('./routes/auth.js');

const testRoutes = require('./routes/api.js');
const app = express()

const port = 3000




// middlewares
app.use(express.json());//send data with json format
app.use(express.urlencoded({extended:false}));//not sending any dorm data
app.use(express.static(__dirname+'/public'));//send data with json format
app.use(cookiepass()); // middle ware for setting up cookies
app.use(cors()); // when we are having api call this will not block it and send data to backend



app.get('/', (req, res) => {
  res.json('Hello World!')
})


// view engine
app.set('view engine','ejs') 

// routes



app.use('api/',Authroutes);
app.use('', testRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})