const {Router} = require('express');
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require('../config');
const {adminMiddleware} = require('../middlewares/admin');

const adminRouter = Router();

const {adminModel,courseModel} = require('../db');

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
        id:admin._id
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
adminRouter.put('/course',adminMiddleware, async function(req,res){
  const  adminId = req.userId;
  const {title,description,imageUrl,price,courseId}=req.body;

  const course = await courseModel.updateOne({
    _id:courseId,
    creatorId:adminId
  },{
   title:title,
   description:description,
   imageUrl:imageUrl,
   price:price
  })
res.json({
   message: 'course updated',
   creatorId:course._id
})
})
adminRouter.get('/course/bulk',adminMiddleware,async function(req,res){
  const adminId = req.userId;
  
  const courses = await courseModel.findOne({
    creatorId:adminId
  });
  
  res.json({
        message: 'course updated',
        courses
    })
})
module.exports ={
    adminRouter:adminRouter
}

