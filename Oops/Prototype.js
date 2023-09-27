function display(name,age){
    this.name=name;
    this.age=age;
}
display.prototype.year="KCET"
display.prototype.details=function(){
    return this.name+this.age+this.year;
}
var person1=new display("Ganeshguru",21)
console.log(person1.name,person1.age,person1.year)
console.log(person1.details())

