const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const mongoUri = process.env.MONGODB_URI;

const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course')
const {adminRouter} = require('./routes/admin')

// const jwt = require('jsonwebtoken')

const app = express();

app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/course',courseRouter);

const connectToDb = async () => {
    try {
        const client = await MongoClient.connect(mongoUri);
        const db = client.db('coursera-app');
        app.listen(3000);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:',err);
    }
}

connectToDb();

