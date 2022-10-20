var Person1 = require('./person');
var Statue1 = require('./statue');
var Medusa1 = require('./medusa');

class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(newVictim){
    var newStatue = new Statue(newVictim.name)
    this.statues.push(newStatue);
    if(this.statues.length === 4){
    var freedPerson = this.statues.shift()
    var newPerson = new Person(freedPerson.name)
    newPerson.mood = 'relieved'
    return newPerson
  }

  }

}


var Statue = require('../exercises/statue');
var Person = require('../exercises/person');

module.exports = Medusa;
