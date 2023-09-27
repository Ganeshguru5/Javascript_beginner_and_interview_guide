class student{
  constructor(name,age,roll,mob){
    //map name,age,roll using constructor
     this.cl_name=name;
     this.cl_age=age;
     this.cl_roll=roll;
     this.cl_mob=mob;
     //this.name is another variable 
     //name is above variable
     //this.name is accessed through student class
  }   
}


// let student1=new student("Ganesh",19,"19ucse068","9093345667");
// let student2=new student("Ram",19,"19ucse060","95345565");
// let student3=new student("Mathew",19,"19ucse027","933456645");

// console.log(student1) //returns Ram(student object)

class school extends student{
    constructor(schoolname,student_name,student_age,student_roll,student_mob){
        super(student_name,student_age,student_roll,student_mob)//child class soda constructora call panna use pannuvom
            this.school_name=schoolname;
    }
    print(){
        return this.cl_name+" studies in this "+this.school_name
    }
    
}

let school1=new school("ABC","ganesh",19,"19ucse068","90933354677")
console.log(school1.print())

let student1=new student("Ganesh",19,"19ucse068","9093345667");
//we extend the student object and use so we can use student class in school
console.log(student1)

