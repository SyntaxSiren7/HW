// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE
function sumArrays(arr1,arr2){
let arr = []
let sumOne = 0;
let sumTwo = 0;
let sumThree = 0;
sumOne = arr1[0] + arr2[0];
sumTwo = arr1[1] + arr2[1];
sumThree = arr1[2] + arr2[2];
arr[0] = sumOne
arr[1] = sumTwo
arr[2] = sumThree
console.log(arr)
return arr;

}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

sumArrays(arr1,arr2)
