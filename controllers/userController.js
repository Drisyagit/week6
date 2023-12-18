// const User=require('../models/userModel');
 //const loadRegister=async(req,res)=>{
   //try {
     //res.render('registration');

   //} //catch (error){
    //console.log(error.message);
   //}
 //}
 //const insertUser = async(req,res)=>{
   // try {
       // const user = new User({
         //name:req.body.name,
         //email:req.body.email,
         //password:req.body.password,
         //is_admin:0
           
         //});

        // const userData = await user.save();
        // if(userData){
          //  res.render('regisration',{message:"Registration has been success."});
         //}
         //else{
           // res.render('regisration',{message:"Registration has been failed."});
         //}
    //} catch (error){
      //  console.log(error.message);
    //}
 //}
 //module.exports = {
   // loadRegister,
    //insertUser
 //}
 const User = require('../models/userModel');

const loadRegister = async (req, res) => {
    try {
        res.render('registration');
    } catch (error) {
        console.log(error.message);
    }
};

const insertUser = async (req, res) => {
    try {
        console.log(req.body); // Log the request body to check the values

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            is_admin: 0
        });

        const userData = await user.save();

        if (userData) {
            res.render('registration', { message: "Registration has been successful." });
        } else {
            res.render('registration', { message: "Registration has failed." });
        }
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    loadRegister,
    insertUser
};