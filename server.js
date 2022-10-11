const express = require('express');
const mainRouter = require('./routes/mainRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/products-api')
.then(()=>{console.log("connected db")})
.catch(err => console.log(err));

const app = express();

app.use(mainRouter);

app.listen(2001, ()=>{
    console.log("listening on port 2001");
})