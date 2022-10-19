class Magician{
  constructor (newObject){
    this.name = 'The Great ' + newObject.name;
    this.assistant = newObject.assistant || false;
    this.favoriteAccessory = newObject.clothing ||'top hat';
    this.confidencePercentage = 10

  }

  performIncantation(string){
    return string.toUpperCase() + '!'
  }

  performTrick(){
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat'){
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
}
  performShowStopper(){
    if (this.confidencePercentage === 110 && this.assistant === true){
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }

}





module.exports = Magician;
