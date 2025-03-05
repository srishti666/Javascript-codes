const users = [
    { firstName: "srishti", lastName: "manna", age: 26 },
    { firstName: "kendal", lastName: "jenner", age: 16 },
    { firstName: "lucy", lastName: "savana", age: 10 },
    { firstName: "ben", lastName: "atkins", age: 50 },
];

//list of full names(map)

const output = users.map(x => x.firstName + " "+  x.lastName);
console.log(output);

//finding age(reduce)
// const output1 = users.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{})

// console.log(output1);

//firstname of all the people whos age is less than 30
// const peeps = users.filter(x => x.age < 30 );

const peeps = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(peeps);
