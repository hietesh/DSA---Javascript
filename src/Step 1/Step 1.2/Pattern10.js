/*
    Enter the Value of N:5

    *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *

*/

const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

let str = "";

for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
        str+='*';
    }
    console.log(str);
    str = "";
}

for(let i=n-1;i>=0;i--){
    for(let j=0;j<i;j++){
        str+='*';
    }
    console.log(str);
    str = "";
}