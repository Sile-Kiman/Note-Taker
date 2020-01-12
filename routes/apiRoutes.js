// ===============================================================================
// LOAD DATA
// ===============================================================================

var noteData = require("../data/noteData.json");
const fs = require('fs');

 
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  //Api page route
  app.get("/api/notes", (req, res) => {
    var data = fs.readFileSync('data/noteData.json')
    var notes = JSON.parse(data);
    return res.json(notes);
      
  });
   
// A function for saving a note to the db
app.post("/api/notes", (req, res) => {
  var id= 0;
  const newNote = req.body ;
  for (var i=1; i<noteData.length; i++){
    id ++;
     
    if(newNote){
       newNote.id = id;  
      }
      else{
      return
      }
     
}
  noteData.push(newNote);
  console.log("new pushed:", noteData)
  var notes = JSON.stringify(noteData);
  var data = fs.writeFileSync('data/noteData.json', notes)
  console.log("from post:", notes)
   
  return res.json(data);
  
  });
 

  app.delete("/api/notes:id", (req, res) => {
     
      const id = req.params.id;
      for (var i=1; i<noteData.length; i++){
        //id ++;
         
        if(id=== noteData.id){
           noteData[i]={};
          }
          else{
          return
          }
          var notes = JSON.stringify(noteData);
          var data = fs.writeFileSync('data/noteData.json', notes)
          console.log("from post:", notes)
           
          return res.json(data);
           
    }
  });
}
