// const products = [
// 	{
// 		code:1,
// 		name:"product1",
// 		category: "music",
// 		price:1
// 	},
// 	{
// 		code:2,
// 		name:"product2",
// 		category: "books",
// 		price:2
// 	},
// 	{
// 		code:3,
// 		name:"product3",
// 		category: "books",
// 		price:3
// 	},
// 	{
// 		code:4,
// 		name:"product4",
// 		category: "music",
// 		price:4
// 	}
// ]

// let sum = 0;
// function calcTotalPrice(products) {
//     products.forEach(element => {sum+= element.price});

// return sum;
// }

// let totalPrice = calcTotalPrice(products)
// console.log(totalPrice);







//Task 2:
// Given is next Array of Objects:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

let sum = 0;
function calcTotalPriceByCategory(products, category) {
    let newArr = products.filter(e=>e.category === category)
    newArr.forEach(element => {sum+= element.price});

return sum;
}

let totalPriceByCategory = calcTotalPriceByCategory(products,'music')
console.log(totalPriceByCategory);

// EXPECTED OUTPUT:
// 5