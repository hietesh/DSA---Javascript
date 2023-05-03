const prompt = require('prompt-sync')();

const n = Number(prompt('Enter n: '));

function printNtimes(n){
    if(n<=1){
        return 1+" ";
    }
    return printNtimes(n-1) + n+" ";
}

console.log(printNtimes(n));