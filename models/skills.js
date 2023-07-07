const foods = [
    {id: 111, food: 'Feed Dogs', done: true},
    {id: 222, food: 'Learn Express', done: false},
    {id: 333, food: 'Buy Milk', done: false}
  ];

  module.exports = {
    getAll
  };
  
  function getAll() {
    return foods;
  }