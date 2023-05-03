const prompt = require('prompt-sync')();

const n = Number(prompt('Enter n: '));

function sum(n){
    if(n==1){
        return 1;
    }
    return n + sum(n-1);
}

console.log(sum(n));