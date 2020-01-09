var mysql = require('mysql');

var newConnection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '2020@Sile',

});

newConnection.connect(err=>{
  if(err) throw err;
  console.log("Yay Connected!")

  newConnection.query("CREATE DATABASE notedb",(err, res) =>{
   if (err) throw err;
   console.log("Database Created!");
   
  });

});

   



// var notesArray = [
//     {
//         title: "Monday",
//         body: "Have an interview",
//         id: "444"
//     }
//   ];
  
//   // Note how we export the array. This makes it accessible to other files using require.
//   module.exports = notesArray;
  