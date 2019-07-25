// set a variable to initialize a new router instance
var router = require('express').Router();
// set a variable pointing to api routes
var apiRoutes = require('./api');
// set a variable pointing to view routes
var viewRoutes = require('./views')

// create a use route that sets a route and uses the variable for apiRoutes
router.use('/api', apiRoutes);
// create a use router that sets a route and uses the variable for view routes
router.use('/', viewRoutes)

// export the file
module.exports = router;