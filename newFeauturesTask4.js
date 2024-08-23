function countVowels(str) {
    let numberOfVowels = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let letter of str) {
        if (vowels.includes(letter)) {
            numberOfVowels++;
        }
    }
    return numberOfVowels;

}

const text = 'Hello, World!';
console.log(countVowels(text));  // Expected output: 3

//, 'e', 'i', 'o', 'u'