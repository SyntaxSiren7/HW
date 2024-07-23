/* ---------------------------------- GIVEN --------------------------------- */
// Array of questions
let questions = [
    "What is the capital of France?",
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];

// Array of options for each question
let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
];

// Array of correct answers
let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];

let output = ""


for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    output += `${question} (${answers[i]})\n\t`;

    let optionForQuestion = options[i];
    output += `${optionForQuestion}\n`

}

console.log(output)

/* ---------------------------- EXPECTED OUTPUT: ---------------------------- */
// What is the capital of France? (Paris)
//     Berlin, Madrid, Paris, Lisbon
// Which language is used for Front-end Web development? (JavaScript)
//     Python, JavaScript, C++, Java
// What does CSS stand for? (Cascading Style Sheets)
//     Cascading Style Sheets, Creative Style System, Computer Style Sheets, Colorful Style Sheets