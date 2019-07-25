//create a variable router and require express.Router()
var router = require('express').Router();
//create a variable noteController and point to notes in controller folder
var noteController = require('../../controllers/note');

// GET route that finds and note by id
// POST route that creates a note (point to noteController)
// DELETE route that deletes a note by id

// export router
module.exports = router;