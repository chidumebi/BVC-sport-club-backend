//importing formModel file
const formModel = require("../model/formModel");

//defining the user details
const userDetails = (req, res) => {
    // Extract data from request body
    const {userID, userName, userAddress, status } = req.body;
    
    //creating a formModel instance
    const formmodel = new formModel({
        userID: userID,
        userName: userName,
        userAddress: userAddress,
        status: status
    });
    
    // saving the file to my MongoDB database
    formmodel.save()
        .then(() => {
            //sending data to my html confirmation page within my computer
            res.redirect(`http://127.0.0.1:5500/confirmationPage/confirmIndex.html//?IDNumber=${userID}&Name=${userName}&Address=${userAddress}&status=${status}`);
        })
        //catching any errors
        .catch((err) => {
           
            console.log(err);
        });
}

//exporting the userDetails
module.exports = userDetails;
