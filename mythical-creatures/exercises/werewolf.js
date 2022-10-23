var Victim1 = require('./victim');
class Werewolf {
  constructor(name){
    this.name = name;
    this.form = 'human';
    this.hungry = false
  }
  completeTransformation(){
    if (this.form === 'human'){
      this.form = 'wolf'
      this.hungry = true
    return 'Aaa-Woooo!'
  } else if(this.form === 'wolf'){
     this.form = 'human'
     this.hungry = false
     return 'Where are I?'
  }
  }
  eatVictim(victimBeingEaten){
    if(this.hungry === true){
      victimBeingEaten.alive = false
      this.form = 'human'
      return 'Yum, Hannah was delicious.'
    }
  }
}

module.exports = Werewolf;
