function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
  }

  // controllers/skills.js


  
  function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
  }

   // Convention is to name the model in uppercase and singular
 const skill = require('../models/skills');

 module.exports = {
   index
 };