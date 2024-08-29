let quote = 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.'
let split = quote.split(' ');

let newArr = split.filter((e,i) => { 
    return e[0] === "t" && split[i].length>2})
console.log(newArr) 
