// this is a controller for our scraper

// declare variable db that points to models folder
var db = require('../models')

// declare a variable scrape that points to the scripts/scrape file
var scrape = require('../script/scrape')
// wrap module.exports
	// scrapeHeadlines is a method that will first scrape the site
		// then call db Headline create
	// don't forget error handling!
// send back json that will print tell how many headlines were added