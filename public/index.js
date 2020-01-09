const fs = require('fs');

// const notePen = document.querySelector(".new-note");
// const saveBtnEL = document.querySelector(".save-note");

// /**  Here is the event listener to start the timer and hide the quiz button*/
// notePen.addEventListener("click", function (event) {
//     if (event.target === notePen) {
//         saveBtnEL.style.display = "block";
         
//     }

// })

function addNote(title, body, id) {

    var notesArr = retrieveNote();
    var notes =
    {
        title: "title",
        body: "title",
        id: "id"
    };
   notesArr.push(notes);
   fs.writeFileSync('db.json', JSON.stringify(notesArr));
     
}

addNote();

function retrieveNote() {
      
    try {
         
      return JSON.parse(fs.readFileSync('db.json'));

    }
    catch (err){
      return [];
     
    }
}

//console.log(retrieveNote())   ;
