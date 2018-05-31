// arguments object - no longer bound with arrow function

const add = (a,b)=>{
  // consolw.log(arguments); // this gives error in arrow functions
  return a+b;
}

console.log(add(55,1,100));
// this keyword -no longer bound

const user ={
  name: 'Andrew',
  cities: ['Philadelphia','New York','Dublin'],
  printPlacesLived(){
    return this.cities.map((city) => this.name+ 'has lived in '+city);
  }
};
console.log(user.printPlacesLived());
