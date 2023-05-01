/*
    Enter value of N: 4
    4444444
    4333334
    4322234
    4321234
    4322234
    4333334
    4444444
*/

const prompt = require('prompt-sync')();

const n = prompt('Enter value of N: ');

for(let i=0;i<(n*2)-1;i++){
    let str="";
    for(let j=0;j<(n*2)-1;j++){
        const top = i;
        const bottom = j; 
        const left =  (2*n - 2) - j;
        const right = (2*n - 2) - i;
        str+=n - Math.min(Math.min(top,bottom),Math.min(left,right));
    }
    console.log(str);
}