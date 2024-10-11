const {Router} = require('express')

const adminRouter = Router();

const {adminModel} = require('../db')

adminRouter.post('/signup',function(req,res){
    res.json({ message :'admin signed up'})
})
adminRouter.post('/signin',function(req,res){
    res.json({
        message: 'admin signed in'
    })
})
adminRouter.post('/',function(req,res){
    res.json({
        message: 'admin signed in'
    })
})
adminRouter.put('/course',function(req,res){
    res.json({
        message: 'admin signed in'
    })
})
adminRouter.get('/course/bulk',function(req,res){
    res.json({
        message: 'admin signed in'
    })
})
module.exports ={
    adminRouter:adminRouter
}

