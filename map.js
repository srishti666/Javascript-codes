// const arr = [ 5, 1, 3, 2, 6];

// function double(x) {
//     return x * 2;
// }
// function triple(x) {
//     return x * 3;
// }
// const output2 = arr.map(triple);


// function binary(x){
//     return x.toString(2);
// }

// //higher order function
// const output = arr.map(function binary(x){
//     return x.toString(2);
// })

//OR 

// const outpur = arr.map((x) => x.toString(2));

// console.log(output);
// console.log(outpur);

//FILTER:
//filter values inside array 
const arr = [ 5, 1, 3, 2, 6];

// function isOdd(x){
//     return x % 2;
// }

function isEven(x){
    return x % 2 === 0;
}
function isGreater(x){
    return x > 4;
}
//arrow func form
const outp = arr.filter(function isGreater(x) {
    return x > 4;
});

//when its going to 2, 6 its returning false so the func is returning the remaining odd numbers

// const output2 = arr.filter((x) => x < 3);

const outputt = arr.filter(isGreater);
console.log(outputt);

//Reduce function

function findSum (arr) {
    let sum = 0;
    for (let i =0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));
//uisng redude function, acc=accumulator, curr=current
const output2 = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0)

console.log(output2);

//find max
console.log(findSum(arr));

// // const arr = [ 5, 1, 3, 2, 6];

const output3 = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
     return max;
}, 0)

console.log(output3);



