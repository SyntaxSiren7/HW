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
    console.log(`${students[maxIndex]} has the highest score ${maxNum}`)
    return maxIndex;

}

let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

getHighestScoreIndex(students, scores)


