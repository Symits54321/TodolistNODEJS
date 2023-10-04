 //library
 const mongoose  = require("mongoose");  

 main().catch(err => console.log(err));
 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/todolist3573');
 
   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 }
 // connect to DB
 //mongoose.connect('mongodb://localhost/node1_db'); 
 
 const db = mongoose.connection;  // acquire the connection
 
 //error
  db.on('error',console.error.bind(console,'error connecting to db'));
 
  // up and running then print the message
  db.once('open',function(){
    console.log('Succesfully connected to the database')
  });