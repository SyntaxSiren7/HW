function createPerson(name, age){
    let p1 ={
        name,
        age,
        greet(){
          console.log(`Hello, my name is ${name}`)
        }
    }
    return p1;
}


const person = createPerson('Ada Byron', 30);
console.log(person.greet())  // Expected output: "Hello, my name is Ada Byron!"



// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
//     const person = new Person('Ada Byron', 30);
//     console.log(person.greet())
   