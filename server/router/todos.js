const express = require('express');
const todos = require('../bd/todos');
const shortid = require('shortid');




const routerTodos = express.Router()



  routerTodos.get('/todos', (req, res, next)=>{
    try{ res.status(200).json({data: todos})}
    catch(err){
      return next(err)
    }
    
});

routerTodos.post('/todos', (req, res, next)=>{
  try{
    const {title, text, picture} = req.body;

    const todo = {
      id: shortid.generate(),
       title, 
       text, 
       picture,
      done: false}
    todos.push(todo)
res.status(201).json({data: todo})

  }catch(err){
    next(err)
  }
});



module.exports = routerTodos