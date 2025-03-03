// // const arr = [ 5, 1, 3, 2, 6];

// // function double(x) {
// //     return x * 2;
// // }
// // function triple(x) {
// //     return x * 3;
// // }
// // const output2 = arr.map(triple);


// function binary(x){
//     return x.toString(2);
// }

// //higher order function
// const output = arr.map(function binary(x){
//     return x.toString(2);
// })

// //or

// const outpur = arr.map((x) => x.toString(2));

// console.log(output);
// console.log(outpur);

//filter: filter values inside array 
const arr = [ 5, 1, 3, 2, 6];

// function isOdd(x){
//     return x % 2;
// }

function isEven(x){
    return x % 2 === 0;
}
//when its going to 2, 6 its returning false so the func is returning the remaining odd numbers

const outputt = arr.filter(isOdd);
console.log(outputt);
