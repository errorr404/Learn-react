// class syntex
/*
class ClassName{
constructor constructorName(param1,param2,param3,...){

}
}

const copyOfClass = new ClassName();

*/
//challange
//setup constructor to take name and age (degault to 0)
// get description - Dixit is 20  year(s) old.

class Person {
  constructor (name = 'Anonymous',age = '0'){
  this.name = name;
  this.age = age;
  }
  getGreeting(){
    return `Hi, I am ${this.name} !`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}
 // create a new class that extends the properties of Person class
 class Student extends Person{
   constructor(name,age,major) {
    super(name,age);  // this super keyword fatch the constructor element from Person constructor
     this.major = major;
   }
   hasMajor() {
     return !!this.major;
   }
   getDescription() {
     let description = super.getDescription();  // this will fetch the getDescription() function from Person class
     if(this.hasMajor()){
       description+= ` Their major is ${this.major}.`;
     }

     return description;
   }
 }

 // challange
 // new subclass of person -Traveller -> person
 // Add suppoert for homeLocation
 // override getGreeting
 //1. Hi.I am Dixit Bishwas. I'm visiting from Bhopal
 // 2 .Hi I am Dixit Bishwas.

class Traveller extends Person {
  constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.homeLocation){
      greeting += `I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}


const me = new Traveller('Dixit Bishwas',20,'Bhopal');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());
