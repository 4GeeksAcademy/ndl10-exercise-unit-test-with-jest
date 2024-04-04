const sum = (a,b) => {
    return a + b;
}


console.log(sum(7,3))





let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function (ValueInDollar){
let valueInYen = ValueInDollar * 156.5;
return valueInYen;
}

const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen * 0.87;

    return valueInPound;
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};