const {Router} = require('express')
const courseRouter = Router();

courseRouter.post('/purchase',  function(req,res){
    res.json({
      message:"signed"
    })
  }
  )
  courseRouter.get('/preview',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )

  module.exports = {
     courseRouter:courseRouter
  }