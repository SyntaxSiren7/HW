// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

function findMaxEven(evenNumbers) {
    let maxNum = 0;

    for (let i = 0; i < evenNumbers.length; i++) {

        let currentNum = evenNumbers[i];
        if (currentNum % 2 === 0 && currentNum > maxNum) {
            maxNum = currentNum;
        }
    }

    console.log(`The max of ${evenNumbers} is ${maxNum}`);

    return maxNum;
}

let numbers = [2, -4, 5, 3, 9, 0, 1];
findMaxEven(numbers);

