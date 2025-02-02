//arrays

const friends = ['Michael', 'Robin', 'Steven'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years[2]);
//primitive values are immunatble but array is not primitive so array is mutable
friends[2] = 'Jay';
console.log(friends);
// friends = ['bob', 'poo'];

const firstName = 'Jonas';
const jonas = [firstName, 'Srishti', 2020 - 1000, 'teacher', friends];
console.log(jonas);