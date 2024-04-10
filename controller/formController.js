
//importing formModel file
const modelForm = require("../model/formModel");

//defining the user details
const userDetails = (req, res) => {
    // Extract data from request body
    const {userID, userName, userAddress, status } = req.body;
    //const formDataEntry = new modelForm(userID, userName, userAddress, status);
    const formDataEntry=[];
    formDataEntry.push(new modelForm(userID, userName, userAddress, status));
     //res.status(200).json({ message: 'Data received successfully' });
     res.status(200).json( { userID, userName, userAddress, status });
   
    console.log('Received data:', { userID, userName, userAddress, status });
    
    //res.redirect(`http://127.0.0.1:5500/confirmationPage/confirmIndex.html?IDNumber=${userID}&Name=${userName}&Address=${userAddress}&status=${status}`);

   

   
    
    
 
   /* const formDataEntry = new modelForm({
        userID: userID,
        userName: userName,
        userAddress: userAddress,
        status: status
    });

   
    
     formDataEntry
       .then(() => {
            //sending data to my html confirmation page within my computer
            res.redirect(`http://127.0.0.1:5500/confirmationPage/confirmIndex.html?IDNumber=${userID}&Name=${userName}&Address=${userAddress}&status=${status}`);
           
        })
        //catching any errors
       .catch((err) => {
           console.error("Error saving data:", err);
            // Handle error appropriately
            res.status(500).json({ error: 'Failed to save data' });
       });*/
}

//exporting the userDetails
module.exports = userDetails;