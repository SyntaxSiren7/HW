let machineNumber = Math.round(Math.random()*10);
console.log(machineNumber)
do{
    userNum = Math.round(Math.random()*10);
    console.log(userNum)
}while(userNum !== machineNumber)