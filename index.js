const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.post('/user/signup',  function(req,res){
  res.json({
    message:"signed up"
  })
}
)
app.post('/user/signin',  function(req,res){
    res.json({
      message:"signed in"
    })
  }
  )
  app.get('/user/purchases',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )
  app.get('/courses',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )
  app.post('/course/purchase',  function(req,res){
    res.json({
      message:"signed up"
    })
  }
  )

  app.post('/admin/signup',  function(req,res){
    res.json({
      message:"admin signed up"
    })
  }
  )
  app.post('/admin/signin',  function(req,res){
      res.json({
        message:"admin signed in"
      })
    }
    )
    app.post('/admin/createcourse',  function(req,res){
      res.json({
        message:"new course created"
      })
    }
    )
    app.delete('/admin/deletecourse',  function(req,res){
      res.json({
        message:"course deleted"
      })
    }
    )

app.listen(3000);