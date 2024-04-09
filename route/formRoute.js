//importing express framework and creating a router
const express = require("express");
const formRouter = express.Router();

//importing from the controller folder
const userDetails = require("../controller/formController");

//connecting to form Model endpoint
formRouter.post('/formDataEntry', userDetails);

//exporting the form Router
module.exports = formRouter;

