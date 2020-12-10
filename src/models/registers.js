const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true


    },
    lastname:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true

    },
    phone:{
        type:Number,
        required:true,
        trim:true,
        unique:true

    },
    age:{
        type:Number,
        required:true,

    },
    gender:{
        type:String,
        required:true,
        
    },
    password:{
        type:Number,
        required:true,

    },
    confirmpassword:{
        type:Number,
        required:true,

    }
    
})
const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;