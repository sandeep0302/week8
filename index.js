const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
console.log(process.env.MONGODB_URL)


const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course')
const {adminRouter} = require('./routes/admin')

const app = express();

app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/course',courseRouter);

async function connectToDb(){
    try {
     await mongoose.connect(process.env.MONGODB_URL);
        
        app.listen(3000);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:',error);
    }
}

connectToDb();

