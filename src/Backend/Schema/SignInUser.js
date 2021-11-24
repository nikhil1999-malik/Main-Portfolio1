const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")

mongoose.connect('mongodb://127.0.0.1:27017/Contacts', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connection Completed') }
    else { console.log("Error in connection") }
});


const SignUser= new mongoose.Schema({
    FirstN:{
        type:String,
    },
    Email:{
        type:String,
    },
    Password:{
        type:String,
    },
    CPassword:{
        type:{
            type:String
        }
    }
})

SignUser.statics.FindCredentials= async(email,password)=>{
    const user=await SignIn.findOne({email})

    if(!user){
        throw new Error("UNable to Login")
    }
    if(user.Password !== password){
      throw new Error("Password isn't matched")
    }

    return user;
}

const SignIn=mongoose.model('SignInUser',SignUser);
module.exports=SignIn;

