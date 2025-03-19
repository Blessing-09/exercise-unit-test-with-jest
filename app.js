const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3))




let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return parseFloat(valueInDollar.toFixed(2));
}
console.log(fromEuroToDollar(100));

const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs.USD;  
    let valueInYen = valueInEuro * oneEuroIs.JPY;  
    return parseFloat(valueInYen.toFixed(2));
}
console.log(fromDollarToYen(3.5));

const fromYenToPounds = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY; 
    let valueInPounds = valueInEuro * oneEuroIs.GBP 
    return parseFloat(valueInPounds.toFixed(2));
}
console.log(fromYenToPounds(3.5));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds};

