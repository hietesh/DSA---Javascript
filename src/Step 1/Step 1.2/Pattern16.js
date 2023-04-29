/*

Enter the value N: 5
A
BB
CCC
DDDD
EEEEE

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter the value N: ');

for(let i=0;i<n;i++){
    let str = ''
    for(let j=0;j<=i;j++){
        str+= String.fromCharCode(65+i);
    }
    console.log(str); 
}