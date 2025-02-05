// const calcTip = [a, b, c] => [a*15/100, b*15/100, c*15/100];
// console.log(calcTip)

// // const bills = [125, 555, 44];

// const tips = calcTip(125, 555, 44)
// console.log(tips);

const calcTip = function(bill){
    return bill  >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips);
