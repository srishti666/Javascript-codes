const massMark= 78;
const heightMark= 1.69;
const massJohn= 92;
const heightJohn= 1.95;

const BMIMark = massMark/(heightMark*heightMark);
const BMIJohn = massJohn/(heightJohn*heightJohn);

const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark,BMIJohn, markHigherBMI);

console.log(BMIMark)