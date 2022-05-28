const express = require('express')
require('dotenv').config();
const app = express();
const path = require('path')
const morgan = require("morgan");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
const mongoose = require('mongoose');
const axios = require('axios')


//Database connection
const url = process.env.MONGODB_URL;
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true
   }).then(()=>{
       console.log('Connection Successful');
   }).catch((error)=>{     
       console.log('Something went wrong', error)
   });


//log requests
app.use(morgan('tiny'));
//parse request to bodyParser
app.use(bodyParser.urlencoded({extended:true}))
//set view engine
app.set('view engine',"ejs")
//app.set('views',path.join(__dirname,'views'))
//loads assets
app.use('/css',express.static(path.resolve(__dirname,'public/css')))
app.use('/js',express.static(path.resolve(__dirname,'public/js')))
app.use('/img',express.static(path.resolve(__dirname,'public/img')))

//load routes
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})