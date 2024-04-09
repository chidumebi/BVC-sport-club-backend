//importing express framework and creating a router
const exp = require("express");
const formRouter = exp.Router();

//importing from the controller folder
const userDetails = require("../controller/formController");


//connecting to form Model endpoint
formRouter.post('/formmodel', userDetails);



//exporting the form Router
module.exports = formRouter;

