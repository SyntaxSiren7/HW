function getHighestScoreIndex(x, y) {
    let maxNum = 0;
    let maxIndex = 0;
    for (let i = 0; i < scores.length; i++) {
        let currentNum = scores[i] * 1;

        if (currentNum > maxNum) {
            maxNum = currentNum
            maxIndex = i
        }
    }
    console.log(`${students[2]} has the highest score ${maxNum}`)
    return maxIndex;

}

let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

getHighestScoreIndex(students, scores)


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6


