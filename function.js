function logger(){
    console.log('My name is Jonas');
}
//calling ,running ,invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
//the result of calling the fruitprocessor funct will be the juice value that just returned
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//parameters are placeholders in a function and arguments are the actual values we use to fill in the placeholder
//function declaration vs exepressions

//type 1
//Function declaration
function calcAge1(birthyear){
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);

//type 2
//Function expression
const calcAge2 = function (birthyear){
    return 2037 - birthyear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

