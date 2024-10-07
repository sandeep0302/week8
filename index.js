const express = require('express')

const {userRouter} = require('./routes/user')
const {courseCreate} = require('./routes/course')

// const jwt = require('jsonwebtoken')

const app = express();

app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseCreate);



app.listen(3000);