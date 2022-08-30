const TodoModel = require("../models/Todomodel");

module.exports.getToDo = async(req,res)=>{
    const Todo= await TodoModel.find();
    res.send(Todo);
}

module.exports.saveToDo = async(req,res)=>{
    const {text} = req.body;
    TodoModel.create({text}).then(()=>res.set(201).send("Added successfully")).catch((err)=>console.log(err))
}

module.exports.deleteTodo = async(req,res)=>{
    const {_id} = req.body;
    TodoModel.findByIdAndDelete(_id).then(()=>res.set(201).send("Deleted successfully")).catch((err)=>console.log(err))
}

module.exports.updateTodo = async(req,res)=>{
    const {_id,text} = req.body;
    TodoModel.findByIdAndUpdate(_id,{text}).then(()=>res.set(201).send("Updated successfully")).catch((err)=>console.log(err))
}

