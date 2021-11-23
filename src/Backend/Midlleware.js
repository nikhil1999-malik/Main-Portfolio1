const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")

mongoose.connect('mongodb://127.0.0.1:27017/Contacts', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connection Completed') }
    else { console.log("Error in connection") }
});


const UserContact = new mongoose.Schema({
    Fname: {
        type: String,
        required: true,
    },
    Sname: {
        type: String
    },
    Subject: {
        type: String
    },
    Message: {
        type: String,
        required: true
    },
})

// UserSchema.statics.FindCredentails = async (email, password) => {
//     const user = await User.findOne({ email })
//     if (!user) {
//         throw new Error("Unable to login")
//     }
//     if (user.password !== password) {
//         throw new Error("Unable to login")
//     }

//     return user;

// }

// UserSchema.methods.generateAuthToken = async function () {
//     const user = this;
//     const token = jwt.sign({ _id: user._id.toString() }, 'thisisforsignin')
//     user.tokens = user.tokens.concat({ token })
//     await user.save();
//     return token;
// }

// UserSchema.methods.toJSON = function () {
//     var user = this.toObject()

//     delete user.password;
//     delete user.tokens;

//     return user;
// }

// UserSchema.methods.toJSON = function () {
//     var obj = this.toObject()
//     delete obj.password

//     return obj
// }


const Contact = mongoose.model('Contacts', UserContact)
module.exports = Contact;