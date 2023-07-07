// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

  // controllers/skills.js
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All skills'
    });
  }

   

 function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'skill Details'
  });
}

 module.exports = {
   index,show
 };