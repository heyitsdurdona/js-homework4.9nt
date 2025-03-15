function universalCurrency(text) {
    const currencyRegex = /(\p{Sc}|\bso['`’]?m\b|\bsum\b|\bsoum\b|\bdollar\b|\beuro\b|\byen\b|\byuan\b|\brubl\b|\btenge\b|\busd\b|\beur\b|\bgbp\b|\bjpy\b|\bcny\b|\brub\b|\buzs\b|\bkzt\b|\bbtc\b)/giu;

    return text.match(currencyRegex) || [];
}

// console.log(universalCurrency("Bu mahsulot $10 turadi."));
// console.log(universalCurrency("Narxi 100 so'm yoki 50 USD."));
// console.log(universalCurrency("Цена: 500₽ или 20€."));
// console.log(universalCurrency("Bitcoin narxi 0.002₿ bo'ldi."));
// console.log(universalCurrency("Ushbu mashina 10000 dollar turadi."));
// console.log(universalCurrency("Yaponiyada narx 5000 yen."));
// console.log(universalCurrency("Xitoy valyutasi yuan bilan hisoblanadi."));
// console.log(universalCurrency("Rubl va Tenge ham ishlatiladi."));


function call(value) {
    let expression = value; 
    
    function inner(next) {
        if (next === undefined) {
            return eval(expression); 
        }
        expression += next; 
        return inner;
    }

    return inner;
}

console.log(call("3")("-")("4")("+")("5")("(")("5")("*")("5")(")")()); 

