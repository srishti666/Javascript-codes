const arr = [ 5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}


const output = arr.map(double);
const output2 = arr.map(triple);
console.log(output);
console.log(output2);

