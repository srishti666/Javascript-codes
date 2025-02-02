const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage);

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);


const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas)
    console.log("Team Dolphin wins!")
    else if(avgKoalas>2*avgDolphins)
    console.log("Team Koala wins!")
    else console.log("No team wins");
}
