const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    cpassword:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    messages:[
        {
            name: {
                type: String,
                require: true,
            },
            email: {
                type: String,
                require: true
            },
            phone: {
                type: Number,
                require: true
            },
            message:{
                type: String,
                require: true
            }
        }
    ],
    tokens:[
        {
        token:{
           type:String,
           required:true
        }
    }
    ]

})
userSchema.pre('save' , async function (next) {
    console.log('hi inside');
    if(this.isModified('password')) {
        this.password =await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
});
userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;

    }catch(err){
        console.log(err);
    }
}
userSchema.methods.addMessage = async function (name, email, phone, message) {
    try {
        this.messages = this.messages.concat({ name, email, phone, message });
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error)
    }
}
const User = mongoose.model('Card',userSchema);
module.exports = User;