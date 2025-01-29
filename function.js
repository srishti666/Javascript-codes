function logger(){
    console.log('My name is Jonas');
}
//calling ,running ,invoking function
logger();
logger();
logger();

function favouriteProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with $(apples) apples and $(oranges) oranges`;
    return juice;
}
favouriteProcessor(5,8);
const appleJuice = favouriteProcessor(5,0);
console.log(appleJuice);

