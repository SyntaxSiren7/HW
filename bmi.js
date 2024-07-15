let height = 1.70;
let weight = 50;
let bmi = (weight / Math.pow(height, 2))

if (bmi < 16) {
    console.log(`Severe underweight`)
} else if (bmi < 16.99) {
    console.log(`Average underweight`)
} else if (bmi < 18.49) {
    console.log(`Slight underweight`)
} else if (bmi < 24.99) {
    console.log(`Normal weight`)
} else if (bmi < 29.99) {
    console.log(`Preobesity`)
} else {
    console.log(`Overweight`)
}