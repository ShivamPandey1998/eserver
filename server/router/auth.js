const express= require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
require('../db/conn');
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate');


// router.get('/',(req,res) =>{
//     res.cookie("jwtoken", 'value')
// res.send("from router");
// });
router.post('/signup', async (req,res) =>{

    const{ UserName,fullname, email, phone, password, cpassword ,age, gender } = req.body

if(!UserName || !fullname || !email || !phone || !password || !cpassword || !age || !gender ){
    return res.status(422).json({Error: "please fieled the error"});
}
try{
   const userExist= await User.findOne({email:email})
   
   if (userExist) {
    return res.status(422).json({ Error:"email already exit"});

    
}else if(password !== cpassword){
    return res.status(422).json({ Error:"password not match"});

}
const user = new User({ UserName, fullname, email, phone, password, cpassword, age, gender   });

    
       const useRegister =await user.save();
       if(useRegister) {
        res.status(201).json({message:"user register successful" 
        ,data: {
            user_id: newUser._id,
            username,
            email,
            full_name,
            age,
            gender
          }
    });
       }else{
           res.status(422).json({message:"user not register"});
       }

} catch(err) { 
    console.log(err)

}
console.log(req.body);
console.log(fullname);

})
    router.post('/signin',async (req,res) =>{
        // console.log(req.body);
        // res.json({mess: "set"});
        try{
            const { email, password } = req.body;
            if(!email || !password){
                return res.status(400).json({error:"invailed deatil"});
            }
            const userLogin = await User.findOne({email});
            if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);
    
    //toke
    
    
                console.log(userLogin);
                if (!isMatch) {
                    res.status(400).json({ error: "Invalid Credientials " });
                } else {
                     // need to genereate the token and stored cookie after the password match 
                     token = await userLogin.generateAuthToken();
                    console.log(token);
        
                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly:true
                    });
                    
                    res.json({ message: "user Signin Successfully" });
                }
                } else {
                     res.status(400).json({ error: "Invalid Credientials " });
                }
        
            } catch (err) {
                console.log(err);
            }
        });
        router.get('/about', authenticate ,(req,res) =>{
            console.log('Hellpo from about');
            res.send(req.rootUser);
        });  
        router.get('/getdata', authenticate,(req,res) =>{
            console.log('hello my contect');
            res.send(req.rootUser);
        })
        router.post('/contect', authenticate, async (req, res) => {
            try {
        
                const { fullname,email,phone,message } = req.body;
                
                if (!fullname || !email || !phone || !message) {
                    console.log(Error)
                    console.log("error in contact fieled form");
                    return res.json({ error: "plzz filled the contact form" });
                }
                const userContact = await User.findOne({ _id: req.userID });
                if (userContact) {
                    
                    const userMessage = await userContact.addMessage(fullname,email,phone,message);
        
                    await userContact.save();
        
                    res.status(201).json({ message: "user Contact successfully" });
        
                }
                
            } catch (error) {
                console.log(error);
            }
        
        });

        router.get('/logout',(req,res)=>{
            console.log('hello from logot');
            res.clearCookie('jwtoken',{ path:'/'});
            res.send(req.rootUser);
        })

module.exports = router