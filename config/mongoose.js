require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.mongourl);

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error connecting to db"));

// up and running then print the message
db.once("open", function () {
  console.log("successfully connected to database!");
});

module.exports = db;
