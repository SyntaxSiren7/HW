const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

for(let i=0; i<=numbersArr.length; i++){
    let currentNum = numbersArr[i];
    if(currentNum%2===0 && currentNum>0){
evenNums.push(currentNum);
    }else if(currentNum%2 !== 0 && currentNum<0){
        oddNums.push(currentNum);
    } else {
continue;
    }
}
console.log(evenNums)