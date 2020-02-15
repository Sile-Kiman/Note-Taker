//Set up all the required modules/data and dependencies 

var noteData = require("../data/noteData.json");
const fs = require('fs');

//Setup API data Routing
module.exports = function (app) {

  //Api page route
  app.get("/api/notes", (req, res) => {
    var data = fs.readFileSync('data/noteData.json')
    var notes = JSON.parse(data);
    res.json(notes);
  });

  // A function for saving a note to the db
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    var id=0;
    for (var i = 0; i <= noteData.length; i++) {   
      if (newNote) {
        id++;
        newNote.id = id;
      }
      else{
        newNote.id = 1
      }
    }  
    noteData.push(newNote);
    refreshData(req, res);
    res.send({redirect: '/notes'})

   });

  //Function to delete an item from the database and reload the array
  app.delete("/api/notes:id", (req, res) => {
    const noteid = req.params.id;
    for (var i = 0; i < noteData.length; i++) {

      if (noteid == noteData[i].id) {
        const index = noteData.indexOf(noteData[i]);
        noteData.splice(index, 1);
      }
    }
    refreshData(req, res);
    res.send({redirect: '/notes'})
    
  });
}

//Function to refresh the database after new entry or deletion
var refreshData = ()=>{
   try{
    var notes = JSON.stringify(noteData);
    return fs.writeFileSync('data/noteData.json', notes)
    
  }
  catch (err){
    return err;
  }
}

