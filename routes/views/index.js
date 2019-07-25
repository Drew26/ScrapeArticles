// set a variable to initialize a new router instance
var router = require('express').Router();
// set a variable that points to models folder
var db = require('../../models');

// create a GET route that renders the homepage
router.get('/', function(req,res){
	//res.send('hello world')
	//res.render('home')
})
	// when it does, read to the Headlines collection and sort by most recent

// create a GET route that renders the saved handlebars page
	// this route will query the Headlines collections and find all articles that have saved = true

// exports
module.exports = router;