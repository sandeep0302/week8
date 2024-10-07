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