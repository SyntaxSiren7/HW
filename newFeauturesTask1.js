let combineArrays = (...arr) => {
    let newArr = [];
    for (let array of arr) {
        newArr.push(...array);
    }
    return newArr;
}

const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8];
console.log(combineArrays(array1, array3));  // Expected output: [1, 2, 3, 6, 7, 8]
console.log(combineArrays(array1, array2, array3));  // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]

