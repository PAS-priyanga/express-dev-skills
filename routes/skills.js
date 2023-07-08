var express = require('express');
var router = express.Router();


// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require("../controllers/skills");
// GET /skills
router.get("/", skillsCtrl.index)
 // All actual paths start with "/skills"
 // GET /skils/new
router.get('/new', skillsCtrl.new);
 // GET /skill/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create); 
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
