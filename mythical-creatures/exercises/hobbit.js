class Hobbit {
  constructor({name}){
    this.name = name
    this.age = 0
    this.adult = false
  }
  celebrateBirthday(){
    this.age++
    if (this.age <= 32){
    this.adult = false
  } else {
    this.adult = true
  }
  }

}


module.exports = Hobbit
