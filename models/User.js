const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const userSchema  =new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please enter e-mail"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter valid email"]
    },

    password: {
        type: String,
        required: [true, "please add password"], 
        minlength: [6, "Min password length is 6 characters"]
    },
})

//fire a fucntion after doc saved (Mongoose hook)

userSchema.post('save', function(doc, next){
    console.log("new user was created and saved", doc);
    next();
})



//fire a fucntion before doc saved (Mongoose hook)

userSchema.pre('save', async function(next){
    const salt  = await bcrypt.genSalt();//adding salt
    // console.log("user about to be created and saved", this);
    this.password = await bcrypt.hash(this.password, salt)
    //hashed password goes to DB
    next();
})





const User = mongoose.model('user', userSchema);

module.exports = User;