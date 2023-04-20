const dotenv = require("dotenv");
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
dotenv.config({path:'./config.env'});
const cookieParser = require('cookie-parser');
require("./db/conn");
const User = require("./model/userSchema");
app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));


const middleware =(req,res,next) =>{
    console.log('hello');
}
const PORT = process.env.PORT


app.get('/',(req,res) =>{
    res.send("hello from")
});      

app.listen(PORT,() =>{
    console.log(`server run in ${PORT}`);
})