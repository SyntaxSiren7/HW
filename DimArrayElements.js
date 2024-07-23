// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

function SumEven2DimArrayElements(element){
let sum = 0;
    for (let i = 0; i<arr.length; i++){
    
        for(let j = 0; j<=arr.length; j++){
            let currentNum = arr[i][j]
            
            if(currentNum %2 === 0){
                sum+=currentNum
            }
        }
    }
    console.log(sum)
return sum;
}

let arr = [
	[1,2,3],
	[4,5,6]
];
let sum = SumEven2DimArrayElements(arr);

