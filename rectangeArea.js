//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:

// ---> YOUR CODE HERE <---
let rectange = {
    width: 6,
    height: 3
}

function calcRectangleArea(rectange) {
   let area =  rectange.width*rectange.height
   console.log(area)
   return area;
}

calcRectangleArea(rectange)
