let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
];
let maxAge = 0;
let oldestStudentName;


for(let i = 0; i<students.length; i++){
   let studentsAge = students[i][1];
  
    if(studentsAge>maxAge){
        maxAge=studentsAge;
        oldestStudentName = students[i];
    }
}
console.log(`The oldest student is ${oldestStudentName[2]} ${oldestStudentName[3]}. He is ${maxAge} years old.`)

