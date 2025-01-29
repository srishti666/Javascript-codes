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
