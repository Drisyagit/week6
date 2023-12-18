const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");
const express=require("express");
const app=express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//for user
const userRoute=require('./routes/userRoute');
app.use('/',userRoute);

app.listen(3001,function(){
console.log("server is running...");
});
