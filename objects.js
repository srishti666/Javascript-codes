//in objects the order of the value is not maintained when we want to retrieve them
const jonasArray = [
    'Jonas',
    'Schmedtann',
    2037 - 1991,
    'teacher',
    ['Mike', 'Bob', 'Lucy']
];

const jonas = {
    firstName: 'Srishti',
    lastName: 'Manna',
    age: 2025 - 2003,
    job: 'SDE',
    friends: ['Astha', 'lily', 'aden']
};

console.log(jonas);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['first' + nameKey]);

const interestedIn = prompt['What do you want to know about JOnas'];
console.log(interestedIn);
