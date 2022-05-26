const express = require('express')
require('dotenv').config();
const app = express();
const path = require('path')
const morgan = require("morgan");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000

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
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/add-task',(req,res)=>{
    res.render('add_task');
})
app.get('/update-task',(req,res)=>{
    res.render('update_task');
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})