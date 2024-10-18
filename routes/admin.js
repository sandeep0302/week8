const {Router} = require('express');
const { z }  = require ("zod");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require('../config');
const {adminMiddleware} = require('../middlewares/admin');


const saltRounds = 5;

const adminRouter = Router();

const {adminModel,courseModel} = require('../db')



adminRouter.post('/signup', async function(req,res){
    const {email,password,firstName,lastName} = req.body;

      await adminModel.create({
      email,
      password,
      firstName,
      lastName
    })
    res.json({
      message:"signup succeeded"
    })  
})
adminRouter.post('/signin', async function(req,res){
    const {email,password} = req.body;
    const admin = await adminModel.findOne({
     email,
     password
    });
    if (admin) {
      const token = jwt.sign({
        id:user._id
      },JWT_ADMIN_PASSWORD);

      res.json({
        token:token
      })
    }else {
      res.status(403).json({
        message:"Incorrect Credentials"
      })
    }
})
adminRouter.post('/course',adminMiddleware,async function(req,res){
       const  adminId = req.userId;
       const {title,description,imageUrl,price}=req.body;

       const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
       })
    res.json({
        message: 'course created',
        creatorId:course._id
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

