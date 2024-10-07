const mongoose = require('mongoose');
console.log("connected to")
mongoose.connect("mongodb+srv://sandeepgsgggg:sandeep007@cluster0.flofr.mongodb.net/coursera-app");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    _id:ObjectId,
    username:{type:String,
        unique:true},
    email :{type:String,
        unique:true},
    password :String,
    firstName:String,
    lastName:String

});
const adminSchema = new Schema({
    _id:ObjectId,
    username: {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        unique:true
    }

});
const courseSchema = new Schema({
    _id:ObjectId,
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId

});
const purchaseSchema = new Schema({
    _id:ObjectId,
    courseId:ObjectId,
    userId:ObjectId
});


const userModel = mongoose.model('user',userSchema);

const adminModel = mongoose.model('admin',adminSchema);

const courseModel = mongoose.model('course',courseSchema);

const purchaseModel = mongoose.model('purchase',purchaseSchema);

module.export = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}