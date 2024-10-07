const {Router} = require('express')
const courseCreate = Router();

courseCreate.post('/purchase',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )
  courseCreate.get('/preview',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )

  module.exports = {
     courseCreate:courseCreate
  }