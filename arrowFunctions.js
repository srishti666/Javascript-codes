// const calcAge2 = function(birthyear){
//     return 2037 - birthyear;
// }

//arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);


// const yearstoretire = birthyear => {
//     const age = 2025 - birthyear;
//     const retirement = 40 - age;
//     return retirement;
// }
// console.log(yearstoretire(2003));


const yearstoretire = (birthyear, firstName)=> {
    const age = 2025 - birthyear;
    const retirement = 40 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearstoretire(2003,'Srishti'));

//function calling other functions

const cutFruitpieces = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges){
    const cutApples = cutFruitpieces(apples);
    const cutOranges = cutFruitpieces(oranges);
    return `the cut fruit contains ${cutApples} apple pieces and ${cutOranges} orange pieces`;
    // const juice = `the cut fruit contains ${cutApples} apple pieces and ${cutOranges} orange pieces`;
    // return juice;
}
console.log(fruitProcessor(2,3));


//video -2 YT

const square = function(number){
    return number * number;
}

const circle = (number) => {
    return number * number;
}



