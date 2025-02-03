//arrays

// const friends = ['Michael', 'Robin', 'Steven'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(years[2]);
// //primitive values are immunatble but array is not primitive so array is mutable
// friends[2] = 'Jay';
// console.log(friends);
// friends = ['bob', 'poo'];


// const firstName = 'Jonas';
// const jonas = [firstName, 'Srishti', 2020 - 1000, 'teacher', friends];
// console.log(jonas); 

//unshift and push methods
//unshift-> add elements to the beginning of the array
//push -> add elemenst to the end of the array
const friends = ['Michael', 'Robin', 'Steven'];

const newLength = friends.push('Normi');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop();
console.log(friends);
//remove first element
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
//boolean: present or not

console.log(friends.includes('Steven'));  //true
console.log(friends.includes('Bob'));  //false
