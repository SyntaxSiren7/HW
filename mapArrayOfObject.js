const cities = [
	{name: 'Sofia', population: 1_236_000},
	{name: 'Plovdiv', population: 343_424 },
	{name: 'Burgas', population: 202_766},
	{name: 'Varna', population: 335_177},
];

function findMinPopulationCityName(cities) {
    let minPopulation = Number.MAX_SAFE_INTEGER;
    let minCityName = '';

    for (let i = 0; i < cities.length; i++) {
        if (cities[i].population < minPopulation) {
            minPopulation = cities[i].population;
            minCityName = cities[i].name;
        }
    }

    return minCityName;
}

const minCityName = findMinPopulationCityName(cities);
console.log( minCityName );

// EXPECTED OUTPUT:
// 'Burgas'
