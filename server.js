//Require Dependencies
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require('express-handlebars')


//Set up Port
var PORT = 3000;

//Var App for Express
var app = express();

//Create a var called routes that points to routes folder
var routes = require("./routes");

//Parse our req body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make a static folder that points to public folder
app.use(express.static("public"));

//Connect handlebars to express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Middleware (app.use routes)
app.use(routes);


//Connect to Mongoose (mongoose.connect)
mongoose.connect("mongodb://localhost/mongoHeadlines", { useNewUrlParser: true });

//Listen to Port
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  