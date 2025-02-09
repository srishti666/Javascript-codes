

for(let rep = 1; rep <=10; rep++){
    console.log(`Lifting weights repitition ${rep}`);
}

const jonas= [
    'Jonas',
    'Schmedtann',
    2037 - 1991,
    'teacher',
    ['Mike', 'Bob', 'Lucy'],
    ['Kacey', 'Billy', 'Lucy'],
    true,
    1000
];

const types = [];


for(let i = 1; i <jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i];
}
