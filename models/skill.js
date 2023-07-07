const skills = [
    {id: 111, skill: 'HTML', done: true},
    {id: 222, skill: 'CSS', done: false},
    {id: 333, skill: 'SQL', done: false}
  ];

 
  
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    
  
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }
  module.exports = {
    getAll,
    getOne
  };
  
  