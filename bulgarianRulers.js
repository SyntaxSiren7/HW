
let rulers = [
    ["асПАРуХ", 681, 700],
    ["тЕРвеЛ", 700, 718],
    ["СеВаР", 738, 753],
    ["телЕРИГ", 766, 777],
    ["каРДАм", 777, 803],
    ["крум", 803, 814],
    ["ОмурТАг", 814, 831],
];

for (let i = 0; i < rulers.length; i++) {
    
  
    let startingYear = rulers[i][1];
    let finalYear = rulers[i][2];
    let rulingYears = finalYear - startingYear;

    if (rulingYears > 15) {
        // Не работи функцията
        // let camelCase = toCamelCaseCyr(rulers[i][0])
        // console.log(`${camelCase} е управлявал ${rulingYears} години.`);

        console.log(`${rulers[i][0]} е управлявал ${rulingYears} години.`);
        }
    }
    


