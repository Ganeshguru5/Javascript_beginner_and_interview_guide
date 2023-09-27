let person1={
    name:"Ganesh",
    height:'678',
    weight:"78"
}
let animal={
    pet_name:"ricks",
    hei:'668',
    wei:"82"
}
person1.__proto__=animal
//By using this we can access animal property by person1
//person1.pet_name returns ricks


let arr=["g","g","fdg"]
console.log(arr.prototype)

//prototype our own function
Function.prototype.Hellouser=function(){
    this=this+" Helllo"
}

function bird () {

}