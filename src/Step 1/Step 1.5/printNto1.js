const prompt = require('prompt-sync')();

const n = Number(prompt('Enter n: '));


function printNtimes(n){
    if(n<=1){
        return 1+" ";
    }
    return n + " " +printNtimes(n-1);
}

console.log(printNtimes(n));