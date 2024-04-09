//importing mongoose
const mongoose = require("mongoose");

//using mongoose schema class
const Schema = mongoose.Schema;

//creating a schema instance
const formSchema = new Schema({
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
}, {
    timestamps: true
});

//creating a mongoose model to store the model
const userRegister = mongoose.model("userRegister", formSchema);

//exporting the mongoose model
module.exports = userRegister;
