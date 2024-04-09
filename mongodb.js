//importing mongoose
const mongoose = require("mongoose");

//my mongodb connection url
const MongoUrl = "mongodb+srv://chidumebi15:Chigirl25art@sportsclubform.wsqwpom.mongodb.net/sportsClubForm?retryWrites=true&w=majority&appName=sportsClubForm";

async function connectToMyMongo() {
    try {
        await mongoose.connect(MongoUrl);
        console.log("successfully connected to MongoDB");
    } catch (err) {
        console.error("Error: could not connect to MongoDB", err);
    }
}

//exporting the function
module.exports = connectToMyMongo;

