var TaskDB = require('../model/model');

//create and save new task
exports.create = (req,res)=>{
    //validate the request
    if(!req.body){
        return res.status(400).send({message: "Content cannot be empty!"})
    }
    //new task
    const task = new TaskDB({
        title : req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        priority : req.body.priority,
        status: req.body.status
    })
    //save the tasks
    task
        .save(task)
        .then(data=>{
            //res.send(data)
            res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({message: err.message ||"Some error occured while creating the task"});
        });
}

//retrieve and retuen all tasks
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        TaskDB.findById(id)
            .then(task=>{
                if(!task){
                    res.status(404).send({message: "Not found task with id" +id})
                }
                else{
                    res.send(task)
                }
            })
            .catch(err=>{
                res.status(500).send({message: "Error, can't find task with id"+id})
            })
    }
    else{
        TaskDB.find()
        .then(task=>{
            res.send(task)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "something went wrong"})
        })
    }
    
} 

//update a new identified task by task id
exports.update=(req,res)=>{
    if(!req.body){
        return res.send(400).status({message: "Data to update cannot be empty"})
    }
    const id = req.params.id;
    TaskDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot Update task with ${id}. `})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message : "Error update task information"})
        })
}

//delete a task with specified task id
exports.delete= (req,res)=>{
    const id = req.params.id;
    TaskDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with id ${id} Maybe id is wrong`})
        }else(
            res.send({message: "Task Deleted successfully"})
        )
    })
    .catch(err=>{
        res.status(500).send({message: `Cannot delete wuth id ${id}` })
    })
}