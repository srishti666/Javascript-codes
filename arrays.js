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
// const friends = ['Michael', 'Robin', 'Steven'];

// const newLength = friends.push('Normi');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //remove elements
// friends.pop();
// console.log(friends);
// //remove first element
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// //boolean: present or not

// console.log(friends.includes('Steven'));  //true
// console.log(friends.includes('Bob'));  //false

//SLICE
let arr = ['a', 'b', 'c','d','e'];

// console.log(arr.slice(2));  //2 to end ; c, d, e
// console.log(arr.slice(2, 4));  //from 2 to 4-1 i.e. c,d
// console.log(arr.slice(-1)); //last element
// console.log(arr.slice(-2)); //last two element
// console.log(arr.slice(1,-1)); // 1 to -1(e) + 1 ; b ,c, d

// //to create a shallow copy
// console.log([...arr]); 
// console.log((arr.slice())); 

// //SPLICE -> mutates the array
// console.log(arr.splice(2));

//REVERSE
arr = ['a', 'b', 'c','d','e'];
const arr2 = ['j' ,'i', 'h','g','f'];
console.log(arr2.reverse());
//reverse method mutates the original array
console.log(arr2);

//CONCAT
//concat doesnt mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);


//  JOIN
// console.log(letters.join(' - '));

//New At Method
// const arr1 = [23, 11, 54];
// console.log(arr1[0]);
// console.log(arr1.at(0));
// console.log(arr1.at(-1)); //to get the last element of an array 
// console.log('jonas'.at(-1));


const movements = [200, 450, -400, 3000, -650, 130, 70, 1300]

for(const [i, movement] of movements.entries()) {
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('-----FOR EACH-----')
movements.forEach(function (movement){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});



function add(a, b) {
    return a + b;
  }
  
  function getAdder() {
    return add;
  }

  let adder = getAdder();
  let result = adder(4, 2); // result will be 6
  let result2 = add(1, 2); // result will be 6
  
  console.log(result); // This will print 6 to the console
  console.log(result2); // This will print 6 to the console
  

// const person = {
//     name: 'mosh',
//     walk(){},
//     talk(){}
// };

// person.talk();
// person.name = '';
// person['name'] = 'john';

// const targetMember = 'name';
// person[targetMember.value] = 'Srishti';

//this keyword
const person = {
    name: "Mosh",
    walk(){
        console.log(this);
    }
};

person.walk();
//if you call a function as a method in an object it returns the reference to that object

const walk = person.walk; //getting a reference to this func, walk is now a function
// console.log(walk);
walk();
//if you call a func as a standalone obj or outside of an obj , "this" will return the Window object
