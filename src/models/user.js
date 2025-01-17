const mongoose = require('mongoose');   
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,  
    },
    lastName: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,  
    },
    password: {
        type: String,
        required: true,  
    },
    age:{
        type: Number,
        // required: true,  
    },
    gender: {
        type: String,
        // required: true,  
    }
});

const userModel = mongoose.model("user", userSchema); // creating a model by passsing model name and schema name
module.exports = userModel; // exporting the model