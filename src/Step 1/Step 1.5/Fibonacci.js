const prompt = require('prompt-sync')();

const n = prompt('Enter n ');

function Fibbonacci(n){
    if(n<=1){return n;}
    
    return Fibbonacci(n-1) + Fibbonacci(n-2);;
}

console.log(Fibbonacci(n));