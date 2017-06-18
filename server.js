//=============================================
// Require server dependencies
//=============================================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//=============================================
// Require Article schema
//=============================================
var Article = require("./models/Article");

//=============================================
// Create an express server stored as app
//=============================================
var app = express();
// Set an initial port.
var PORT = process.env.PORT || 3000;

//====================================================
// Debug and log events with morgan
//====================================================
app.use(logger("dev"));

//====================================================
// Access data sent to the server with bodyParser
//====================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//====================================================
// Access static files in the ./public directory
//====================================================
app.use(express.static("./public"));

//====================================================
// MongoDB configuration
//====================================================
mongoose.connect("mongodb://localhost/nytSearch");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//=============================================
// Routes
//=============================================


//=============================================
// Start server
//=============================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});