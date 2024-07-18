let students = [
    [
        'Pesho',
        ['math', 5],
        ['physics', 4],
        ['music', 6],
    ],
    [
        'Maria',
        ['math', 6],
        ['physics', 5],
        ['music', 5],
    ],
    [
        'George',
        ['math', 2],
        ['physics', 5],
        ['music', 4],
    ]
];

for(let i = 0; i<students.length; i++){
    let maxGrade = 0;
let bestSubject = "";
    for(let j = 1; j<students[i].length; j++){
      
        if(students[i][j][1]>maxGrade){
            maxGrade = students[i][j][1];
            bestSubject = students[i][j][0];
        }
        
}
console.log(`${students[i][0]} is best in ${bestSubject} (${maxGrade})`);

    }
  


