//Set the packages needed 
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const path = require('path');
const fs = require('fs');


//setup body parser 
var bodyParser = require('body-parser');
app.use(bodyParser.json());//support json encoded body 
app.use(bodyParser.urlencoded({ extended: true}));//support encoded body
app.use('/static', express.static(path.join(__dirname, 'public')))

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
    res.sendFile(path.join(__dirname, "data/db.json"));
   });

    // //Api page route
    // app.get("/public/css/styles", (req, res)=>{
    // res.sendFile(path.join(__dirname, "public/css/styles"));
    //  });
  
//Start the Server 

app.listen(PORT);

console.log("Your Application is on http://localhost:", PORT);