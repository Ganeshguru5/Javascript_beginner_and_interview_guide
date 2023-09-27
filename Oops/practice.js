function man(firestname,lastname){
    this.firestname=firestname;
    this.lastname=lastname;
    this.display=function(){
        return this.firestname +" "+ this.lastname
    }
}

const ganesh=new man("Ganesh","Guru")
const ram=new man("Ram","Prasanth")

function age(num){
    this.age=num;
}

man.__proto__=age.prototype



console.log(ganesh)
