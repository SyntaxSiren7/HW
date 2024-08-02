 // конструктор за обекти от тип Patient:
 function Patient( age, firstName, lastName ){
    this.age = age;
    this.firstName = firstName;
    this.lastName= lastName;

    // TODO: discuss why this is memory greedy:
    this.printAge = function(){
        console.log( this.firstName + " е на " + this.age + " години.");
    };	   
};

// създаване и използване на обектите:
var ivan = new Patient( 14, "Иван", "Иванов");
var petyr = new Patient( 70, "Петър", "Петров");

// ivan.printAge();	
// petyr.printAge();


function isYounger( patient1, patient2 ){
    if(patient1.age<=patient2.age){
        return true;
    } else{
        return false;
    }
   
}

if ( isYounger(ivan, petyr) ){
    console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
}else{
    console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
};