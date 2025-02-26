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

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

//filter method iterates over the array jobs and passes through the below func
const activeJobs = jobs.filter(function(job) { 
    return job.isActive;
})
const isactiveJobs = jobs.filter(job => job.isActive);


//arrow func & this
const person = {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log("self", self);
        }, 1000);
    }
};

person.talk();

// const person = {
//     talk() {
//         setTimeout(function() {
//             console.log("this", this);
//         }, 1000);
//     }
// };

// person.talk();

//ARRAY MAP: render a list of items
const colors = ['red', 'green', 'blue'];
// const items = colors.map(color =>'<li>' + color + '</li>');
const items = colors.map(color => `<li> ${color} </li>`); //template literal
console.log(items);

//Object destructuring:  to unpack values from arrays, or properties from objects, into distinct variables.

const address = {
    street: '',
    city: '',
    country: ''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

//destructuring
const { street, city, country} = address;
const { street: st} = address; //to use alias for a property

//Spread Operator: [...xyz]
const first = [1, 2, 3];
const second = [1, 2, 3];

// const combined = first.concat(second);
const combined = [...first,'a', ...second, 'b'];
// const combined2 = {...first, ...second location}
console.log(combined)

const clone = [...first];

