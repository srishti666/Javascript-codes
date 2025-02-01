// const calcAge2 = function(birthyear){
//     return 2037 - birthyear;
// }

//arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = birthyear => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return retirement;
// }

const yearstoretire = birthyear => {
    const age = 2025 - birthyear;
    const retirement = 40 - age;
    return retirement;
}
console.log(yearstoretire(2003));




