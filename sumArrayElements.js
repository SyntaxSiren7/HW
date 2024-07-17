let numbers = [-2, 3, 7, 8, -1, 4, 2];
sum = 0;

for(let i = 0; i<numbers.length;i++){
    let currentNum = numbers[i];
 if(currentNum>0 && currentNum%2 === 0){
    sum+=currentNum;
 }
}
console.log(sum);