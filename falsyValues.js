console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Srishti'));
console.log(Boolean({}));


// loosely equals and strictly equals
//  == : it compares by doing type coersion
//  === : it does not do type coersion but will compare strictly

// 18 == '18' : true
// 18 === '18' : false 

// const favourite =Number(prompt("What is your fav number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23){
//     console.log("Cool! 23 is an amazing number! ");
// }

//ternary operator

const age = 23;
// age >=18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water';

console.log(drink)
