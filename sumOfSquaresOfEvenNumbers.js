let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
let output = numbers.filter(e=> e %2 === 0)

output.forEach(element => { let square = element*element
    sum+=square
   
});

console.log(sum)