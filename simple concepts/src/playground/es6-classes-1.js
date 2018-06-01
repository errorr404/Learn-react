// class syntex
/*
class ClassName{
constructor constructorName(param1,param2,param3,...){

}
}

const copyOfClass = new ClassName();

*/


class Person {
  constructor (name 'Anonymous'){
  this.name = name;
  }
  getGreeting(){
    return `Hi, I am ${this.name} !`;
  }
}
const me = new Person('Dixit Bishwas');
console.log(me);
const other = new Person();
console.log(me.getGreeting());
