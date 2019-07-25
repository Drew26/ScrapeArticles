// set variable router and require express.Router()
var router = require('express').Router();
// set variable fetchRoutes and require (./fetch)
var fetchRoutes = require('./fetch');
// set variable noteRoutes and require notes.js file
var noteRoutes = require('./note');
// set variable headline routes and require headline.js
var headlineRoutes = require('./headline');
// set variable clear routes and require clear.js'
var clearRoutes = require('./clear');


// create /fetch route, call noteRoutes
router.use('/fetch', fetchRoutes);
// create /notes route, call noteRoutes
router.use('/note', noteRoutes);
// create /headlines call headline routes
//router.use('/headline', headlineRoutes);
// create /clear call clear routes
router.use('/clear', clearRoutes);

module.exports = router;