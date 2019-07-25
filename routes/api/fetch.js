//create a var router to require express.router
var router = require('express').Router();
//create a var called fetch_controller that requires fetch file in controllers
var fetch_controller = require('../../controllers/fetch')
//create route to call fetch method in controllers folder


//module.exports
module.exports = router;