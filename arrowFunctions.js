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


