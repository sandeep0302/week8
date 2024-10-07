const {Router} = require('express');

const userRouter = Router();

userRouter.post('/signup',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )
  userRouter.post('/signin',  function(req,res){
      res.json({
        message:"signed in"
      })
    }
    )
    userRouter.get('/purchases',  function(req,res){
      res.json({
        message:"signed up"
      })
    }
    )


    module.exports = {
        userRouter : userRouter
    } 
    