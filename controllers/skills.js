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
   index,show,new:newSkill,create,delete:deleteskill} 
 ;

 function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function deleteskill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}