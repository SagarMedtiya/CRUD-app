const axios = require('axios');
const moment = require('moment');

exports.homeRoutes = (req,res)=>{
    //Make a GET request to api/tasks
    axios.get('http://localhost:3000/api/tasks')
        .then(function(response){
            res.render('index', { tasks: response.data, moment: moment});
        })
        .catch(err=>{
            res.send(err)
        })
    
}

exports.add_task = (req,res)=>{
    res.render('add_task');
}

exports.update_task = (req,res)=>{
    axios.get('http://localhost:3000/api/tasks',{ params: {id:req.query.id}})
        .then(function(taskdata){
            res.render("update_task",{task: taskdata.data, moment: moment})
        })
        .catch(err=>{
            res.send(err)
        })
}