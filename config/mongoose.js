

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rishikesh:rishikesh@cluster0.r028t6k.mongodb.net/?retryWrites=true&w=majority");

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error connecting to db"));

// up and running then print the message
db.once("open", function () {
  console.log("successfully connected to database!");
});

module.exports = db;
