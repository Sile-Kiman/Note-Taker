//Set the packages needed 
var express = require("express");
var app = express();
var PORT = process.env.PORT || 7000;
var path = require('path');

//setup body parser 
var bodyParser = require('body-parser');
app.use(bodyParser.json());//support json encoded body 
app.use(bodyParser.urlencoded({ extended: true}));//support encoded body


//module.exports = function ( app) {

    //Application routes are setup here
    app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
    });
    
  //Note page route
    app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/notes.html"));
    });

  //Api page route
    app.get("/api/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "data/db.js"));
   });

//Start the Server 

app.listen(PORT);

console.log("Your Application is on http://localhost:", PORT);