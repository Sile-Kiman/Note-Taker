//Set the packages needed for the dependency
var path = require("path");

// Setup routing   for the pages 
 
module.exports = function(app) {
   
  //Note page route
  app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


  // If no matching route is found default to home
  app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
