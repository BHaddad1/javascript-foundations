class Dragon {
  constructor(name, rider){
    this.name = name,
    this.rider = rider,
    this.hungry = true
    this.ate = 0
  }
  greet(){
    var rider = this.rider
    return `Hi, ${rider}!`
  }
  eat(){
    this.ate++
    if(this.ate > 2){
      return this.hungry = false
    }
  }
}

module.exports = Dragon;
