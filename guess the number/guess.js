let userNumber = Number(prompt('Enter a number'))
console.log(userNumber)
generatedNumber = Math.round(Math.random()*100);
let attempts = 0;

while(userNumber !== generatedNumber){

    attempts++
    if(userNumber<generatedNumber){
        alert(`The number is greater than ${userNumber}`);
    } else if(userNumber>generatedNumber){
        alert(`The number is smaller than ${userNumber}`);
    
    }else {
        alert(`Congradulations, you have succeseded after ${attempts} attempts!`)
        break;
    }
    
    userNumber = prompt('Enter a number')
   
}


