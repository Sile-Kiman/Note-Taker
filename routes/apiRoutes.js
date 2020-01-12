// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var noteData = require("../data/noteData");
var path = require("path");
const fs = require('fs');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  //Api page route
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
     
  });
  // API POST Requests
  app.post("/api/notes", function (req, res) {
    res.json(noteData)
    for (var i = 0; i < res.length; i++){
      if (res) {
        fs.appendFileSync("../data/noteData", req.body)
         
      }
    }
 
  });


};