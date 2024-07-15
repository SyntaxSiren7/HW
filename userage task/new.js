function checkUserAge() {
let inputsValues = getInputsValues();
let userBirthYear = inputsValues.uBirth.year;
let userName = inputsValues.uname;

let userAge = 2024 - userBirthYear;
if (userAge>= 18) {
console.log(`Добре дошли, ${userName}`);
} else if (userAge >=12 && userAge <18) {
console.log(`${userName}, ще имате достъп само до определена функционалност от този сайт`);

} else {
let difference = 12 - userAge;
console.log(`Съжaлявам ${userName},отбий се тук след ${difference} години!`);
}
writeToOutput("Попълнете формата и кликнете върху бутона!");

function getInputsValues() {
var form = document.getElementsByClassName("test")[0];
var inputs = form.getElementsByTagName("input");
var inputsValues = {};

for (var i = 0, len = inputs.length; i < len; i++) {
    var inputNode = inputs[i];
    var inputNodeValue = inputNode.value;

    // check for date field:
    if (inputNode.type === "date") {
        var dateMatch = inputNodeValue.match(/^(\d{4})-(\d{2})-(\d{2})$/); //YYYY-MM-DD
        if (dateMatch) {
            inputNodeValue = {
                year: dateMatch[1],
                month: dateMatch[2],
                day: dateMatch[3]
            };
        }
    } else {
        inputNodeValue = inputNode.value;
    }
    inputsValues[inputNode.id] = inputNodeValue;
}

// console.log("inputsValues=", inputsValues);
return inputsValues;
}
function writeToOutput(result) {
var outputNode = document.getElementById("output");
outputNode.innerHTML = result;
}
}