const express = require('express');
const Task = require('../models/taskModel');
const router = new express.Router();

//ROUTES

// CREATE a task
router.post('/tasks',async (req,res)=>{
    try{
      const task = new Task(req.body)
      if(!task){
        throw new Error("You cannot create an empty task")
      }
      await task.save();
      res.status(201).send(task)
    }catch(e){
        res.status(400).send(e.message)
    }
})

// GET all tasks
router.get('/tasks',async (req,res)=>{
    try{
        const tasks = await Task.find({});
        if(tasks.length === 0){
         return res.send('You have not created any tasks yet')
        }
        res.send(tasks)
    }catch(e){
        res.status(500).send(e.message)
    }
})

// GET a single task
router.get('/tasks/:id',async (req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).send("Task doesn't exist")
        }
        res.send(task)
    }catch(e){
        res.status(404).send("Task doesn't exist")
    }
})

// UPDATE a task
router.patch('/tasks/:id', async (req,res)=>{
    const updates = Object.keys(req.body);
    try{
      const task = await Task.findById(req.params.id);
      if(!task){
        return res.status(404).send("Task doesn't exist!")
      }
      updates.forEach(update=>task[update] = req.body[update])
      await task.save()
      res.send(task)
    }catch(e){
        res.status(404).send()
    }
})

module.exports= router;