const prompt = require('prompt-sync')();

const n = prompt('Enter N: ');

function factorial(n){
    if(n==1 || n==0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(n));