//starting with an app js file by importing express framework
const exp = require("express");

//creating an express instance
const app = exp();

//connecting to my mondodb database
const myMongo = require("./mongodb");

//setting up a route
const formRoute = require("./route/formRoute");

//middle ware with CORS headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(exp.json());
app.use(exp.static("Users"));
app.use(exp.urlencoded({ extended: true }));
app.use(formRoute); 
myMongo();

PORT = 8080;

//setting up port Number
app.listen(PORT, () => {
    console.log("server has been initialized on port " + PORT)
});