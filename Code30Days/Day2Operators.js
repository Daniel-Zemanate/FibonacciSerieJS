// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

// There are 3 lines of numeric input:
// The first line has a double, the cost of the meal before tax and tip.
// The second line has an integer, the percentage of  being added as tip.
// The third line has an integer, the percentage of  being added as tax.

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let userInput="";
let arrayUserInfo=[];
let inputCount=0;

// Values must be entered in order: Meal cost, tip percentage, tax percentage use ENTER to finish input and use CTRL + d when all info has been entered
process.stdin.on("data", function(UserData){
    userInput += UserData;
});

process.stdin.on("end", function(){
    arrayUserInfo = userInput.split("\n");
    main();
});

function readline(){
    return  arrayUserInfo[inputCount++];
};

function calculate(mealPrice, tipPercentage, taxPercentage){
    let resultTipPercentaje=0.0, resultTaxPercentaje=0.0, resulTotal=0.0;
    resultTipPercentaje = (mealPrice * (tipPercentage*1.0))/100.0;
    resultTaxPercentaje = (mealPrice * (taxPercentage*1.0))/100.0;
    resulTotal = mealPrice + resultTipPercentaje + resultTaxPercentaje;

    console.log(`Tip price: ${(resultTipPercentaje)}`);
    console.log(`Tax price: ${(resultTaxPercentaje)}`);
    console.log(`Total price: ${Math.round(resulTotal)}`);

}




function main(){
    const mealPrice = parseFloat(readline().trim());
    const tipPercentage = parseInt(readline().trim());
    const taxPercentage = parseInt(readline().trim());

    console.log(`Meal price: ${mealPrice}`);
    console.log(`Tip: ${tipPercentage}%`);
    console.log(`Tax: ${taxPercentage}%`);

    calculate(mealPrice, tipPercentage, taxPercentage);



};