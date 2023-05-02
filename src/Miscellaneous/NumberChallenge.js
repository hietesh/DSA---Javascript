const x = Math.floor(Math.random()*100+1);
const y = Math.floor(Math.random()*50+1);

const sum = `${x} + ${y} = ${x+y}`;
const diff = `${x} - ${y} = ${x-y}`;
const product = `${x} * ${y} = ${x*y}`;
const quotient = `${x} / ${y} = ${x/y}`;
const remainder = `${x} % ${y} = ${x%y}`;

console.log(sum);
console.log(diff);
console.log(product);
console.log(quotient);
console.log(remainder);