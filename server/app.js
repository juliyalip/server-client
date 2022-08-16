const express = require('express')
const routerTodos = require('./router/todos')

const app = express()

// parse application/json
app.use(express.json());

app.use('/', routerTodos)
app.use((_, res, __) => {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Use api on routes: /api/tasks',
      data: 'Not found',
    })
  })
  
  app.use((err, _, res, __) => {
    console.log(err.stack)
    res.status(500).json({
      status: 'fail',
      code: 500,
      message: err.message,
      data: 'Internal Server Error',
    })
  })
  
  module.exports = app
