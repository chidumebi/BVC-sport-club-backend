//importing mongoose
//const mongoose = require("mongoose");

//using mongoose schema class
//const Schema = mongoose.Schema;

//creating a schema instance
//creating a mongoose model to store the model
//const userRegister = ("userRegister", formSchema);

//exporting the mongoose model

/*
let userForm = {
    userID: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
};

module.exports = userForm; */

class UserForm {
    constructor(userID, userName, userAddress, status){
        this.userID = userID;
        this.userName = userName;
        this.userAddress = userAddress;
        this.status = status;
    }
}

module.exports = UserForm;
