//hey kiddo
const checkAge = function (age) {
    if (age >= 18) {
        return "hello there";
    } else {
        return "hey kiddo";
    }
};

const theAgeIs = function (age) {
    const antwoord = checkAge(16);
    console.log(antwoord);
};

theAgeIs();

//vat calculation
const vatCalculation = function (number) {
    console.log ("using your vat");
    return number/100+1;
};

const priceIncludingVat = function (baseprice, number) {
   console.log ("calculating your price");
   const vatFormula = vatCalculation (number);
    return baseprice*vatFormula;
};

console.log (priceIncludingVat (100,21)); //121
console.log (priceIncludingVat(10,21)); // 12.10
console.log (priceIncludingVat(500,0)); //500
console.log (priceIncludingVat(15,6)); //15.90


/* //vat excercise 2
/* const basePriceCalculation = function (number) {
    console.log ("using your base price");
    return number/100+1;
};

const priceIncludingVat = function (totalamount, number) {
   console.log ("calculating your price");
   const vatAmount = basePriceCalculation (number);
    return baseprice*vatAmount; /* /* */
/* }; */ */
